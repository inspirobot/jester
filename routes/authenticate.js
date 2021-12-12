/**
 * 
   * @swagger
   * /api/v1/authenticate:
   *   post:
   *     summary: Exchange an auth code for the data from github
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:      # Request body contents
   *             type: object
   *             example:   # Sample object
   *               { code }
   *     responses:
   *       "200":
   *         description: Data from github
   *         content:
   *           application/json:
   *       "400":
   *         description: Error.
 */
 
const express = require("express");
const router = express.Router();
const FormData = require("form-data");
const axios = require('axios');

const config = require("../config");

async function GetDiscordTokenFromCode(code)
{
    const params = new URLSearchParams()
    params.append('client_id', config.discord.client_id)
    params.append('client_secret', config.discord.client_secret)
    params.append('grant_type', 'authorization_code')
    params.append('code', code)
    params.append('redirect_uri', config.discord.redirect_uri)
    
    try {
        response = await axios.post("https://discord.com/api/oauth2/token", params, {headers: { "Content-Type": "application/x-www-form-urlencoded" }});
        const access_token = response.data.access_token;
        // Request to return data of a user that has been authenticated
        response = await axios.get("http://discordapp.com/api/users/@me", {headers: { "Authorization": `Bearer ${access_token}`}});
        retval = {
            avatar_url : `https://cdn.discordapp.com/avatars/${response.data.id}/${response.data.avatar}.png`,
            name : "",
            login : response.data.username,
            id : response.data.id
        }
        return retval;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

async function GetGithubTokenFromCode(code)
{
    const data = new FormData();
    data.append("client_id", config.github.client_id);
    data.append("client_secret", config.github.client_secret);
    data.append("code", code);
    data.append("redirect_uri", config.github.redirect_uri);

    response = await axios.post("https://github.com/login/oauth/access_token", data, {headers: { "Content-Type": `multipart/form-data; boundary=${data._boundary}`}});
    const access_token = (new URLSearchParams(response.data)).get("access_token");
    // Request to return data of a user that has been authenticated
    response = await axios.get("https://api.github.com/user", {headers: { "Authorization": `token ${access_token}`}});
    return response.data;
}

router.post("/", async function (req, res) {
    
    // Request to exchange code for an access token
    try {
        const { code, provider } = req.body;

        if (provider === 'github') {
            data = await GetGithubTokenFromCode(code)            
        } else if (provider === 'discord') {
            data = await GetDiscordTokenFromCode(code)            
        } else {
            return res.status(404);
        }
        return res.status(200).json(data);
    } catch(error)  {
        return res.status(400).json(error);
    }
});
  
module.exports = router;
