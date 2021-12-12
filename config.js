const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const config = {
  github : {
    client_id: process.env.GITHUB_CLIENT_ID,
    redirect_uri: process.env.GITHUB_REDIRECT_URI,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
  },
  discord : {
    client_id: process.env.DISCORD_CLIENT_ID,
    redirect_uri: process.env.DISCORD_REDIRECT_URI,
    client_secret: process.env.DISCORD_CLIENT_SECRET,
  }
};

module.exports = config;
