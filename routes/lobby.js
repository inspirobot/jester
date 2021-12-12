/** 
 *@swagger
 *  components:
 *    securitySchemes:
 *     bearerAuth:            # arbitrary name for the security scheme
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT 
 *    schemas:
 *      Player:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            format: guid
 *            description: The auto-generated player id.
 *          name:
 *            type: string
 *          createdAt:
 *            type: string
 *            format: date-time
 *            description: The date of the game creation.
 *        example:
 *          id: 7
 *          name: inspirobot
 *          game: 5   
 *          createdAt: 2021-11-26T19:22:31.657Z
 *      Game:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            format: guid
 *            description: The auto-generated game id.
 *          type:
 *            type: string
 *            description: The type of game
 *          players:
 *            type: array
 *            items: 
 *              $ref: '#/components/schemas/Player'
 *          status:
 *            type: string
 *            enum: [open, closed, started, finished]
 *          settings:
 *             $ref: '#/components/schemas/WizardSettings' 
 *          createdAt:
 *            type: string
 *            format: date-time
 *            description: The date of the game creation.
 *        example:
 *          id: 7
 *          type: Wizard 
 *          players: []
 *          settings: {}
 *          createdAt: 2021-11-26T19:22:31.657Z
*/

/**
 * 
 * @swagger
 * tags:
 *   name: Lobby
 *   description: API to manage your games.
 * 
 */

/**
 * 
   * @swagger
   * /api/v1/lobby/game:
   *   get:
   *     summary: Lists all the games
   *     tags: [Lobby]
   *     responses:
   *       "200":
   *         description: The list of games.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Game'
   *   post:
   *     security:
   *       - bearerAuth: []    
   *     summary: Creates a new game
   *     tags: [Lobby]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:      # Request body contents
   *             type: object
   *             properties:
   *               type:
   *                 type: string
   *               settings:
   *                 type: object 
   *             example:   # Sample object
   *               settings: {
   *                 NumberOfWizards : 4  
   *               }
   *               
   *     responses:
   *       "201":
   *         description: The created game.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/components/schemas/Game"
   * 
   * /api/v1/lobby/register:
   *   post:
   *     summary: Assigns a bearer token to a player so they can join a game
   *     tags: [Lobby]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:      # Request body contents
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *             example:   # Sample object
   *               name: Gob
   *     responses:
   *       "200":
   *         description: The game settings.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 token:
   *                   type: string
   * /api/v1/lobby/game/{id}:
   *   get:
   *     summary: Gets a game by id
   *     tags: [Lobby]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   * #          format: uuid
   *         required: true
   *         description: The game id
   *     responses:
   *       "200":
   *         description: The game settings.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Game'
   *       "404":
   *         description: Game not found.
   *
   * /api/v1/lobby/game/{id}/start:
   *   put:
   *     security:
   *       - bearerAuth: []    
   *     summary: Starts a game
   *     tags: [Lobby]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   * #          format: uuid
   *         required: true
   *         description: The game id to start
   *     responses:
   *       "204":
   *         description: No content returned. Game started.
   *       "304":
   *         description: Not modified. Game already started.
   *       "404":
   *         description: Game not found.
   * /api/v1/lobby/game/{id}/join:
   *   put:
   *     security:
   *       - bearerAuth: []    
   *     summary: Join a game
   *     tags: [Lobby]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   * #          format: uuid
   *         required: true
   *         description: The game id to join
   *     responses:
   *       "204":
   *         description: No content returned. Game successfully joined.
   *       "304":
   *         description: Not modified. Game already started.
   *       "404":
   *         description: Game not found.
   * /api/v1/lobby/game/{id}/leave:
   *   put:
   *     security:
   *       - bearerAuth: []    
   *     summary: Leave a game
   *     tags: [Lobby]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   * #          format: uuid
   *         required: true
   *         description: The game id to leave
   *     responses:
   *       "204":
   *         description: No content returned. Game successfully left.
   *       "304":
   *         description: Not modified. Game already started.
   *       "404":
   *         description: Game not found.
   * /api/v1/lobby/game/{id}/kick:
   *   put:
   *     security:
   *       - bearerAuth: []    
   *     summary: Remove a player from a game
   *     tags: [Lobby]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   * #          format: uuid
   *         required: true
   *         description: The game id
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:      # Request body contents
   *             type: object
   *             properties:
   *               playerId:
   *                 type: integer
   *             example:   # Sample object
   *               playerId: 1
   *     responses:
   *       "204":
   *         description: No content returned. Game successfully joined.
   *       "304":
   *         description: Not modified. Game already started.
   *       "404":
   *         description: Game not found.
*/


const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const auth = require('../util/auth');

let games = []
let players = []
const token_player_map = new Map();

router.get("/game", function (req, res) {
    res.status(200).json(games);
});

router.post("/game", auth.verifyToken, async function (req, res) {
    const { settings } = req.body;

    // find player by bearer token

    let game = {
        id: games.length + 1,
        type: "Wizard",
        creator: req.authdata.player,
        createdAt: new Date(),
        settings : settings,
        status : "open",
        players: []
    };

    games.push(game);

    res.status(201).json(game);
});

router.post("/register", async function (req, res) {
    const { name } = req.body;

    let player = {
        id: players.length + 1,
        name: name,
        createdAt: new Date(),
    };

    players.push(player);

    let bearer_token = await auth.getToken({player}) 
    token_player_map.set(bearer_token, player.id);
    res.status(201).json({token:bearer_token, id: player.id});
});

router.get("/game/:id", function (req, res) {
    let game = games.find(function (item) {
        return item.id == req.params.id;
    });

    game ? res.status(200).json(game) : res.sendStatus(404);
});

router.put("/game/:id/join", auth.verifyToken, async function (req, res) {
    let game = await games.find(function (item) {
        return item.id == req.params.id;
    });

    if (game) {
        if (game.status !== "open") {
            res.sendStatus(304);
            return
        }
        index = game.players.findIndex(player => player.id === req.authdata.player.id);
        if (index !== -1) {
            res.sendStatus(304);
            return;
        }
        game.players.push(req.authdata.player)
        res.sendStatus(204)
    } else {
        res.sendStatus(404);
    }
});

router.put("/game/:id/kick", auth.verifyToken, async function (req, res) {
    const { playerId } = req.body;

    let game = await games.find(function (item) {
        return item.id == req.params.id;
    });

    if (game) {
        if (game.status !== "open") {
            res.sendStatus(304);
            return
        }
        index = game.players.findIndex(player => player.id === req.authdata.player.id);
        if (index === -1) {
            res.sendStatus(304);
        } else {
            game.players.splice(index, 1);
            res.sendStatus(204);      
        } 
    } else {
        res.sendStatus(404);
    }     
});

router.put("/game/:id/leave", auth.verifyToken, async function (req, res) {
    let game = await games.find(function (item) {
        return item.id == req.params.id;
    });

    if (game) {
        if (game.status !== "open") {
            res.sendStatus(304);
            return
        }
        index = game.players.findIndex(player => player.id === req.authdata.player.id);
        if (index === -1) {
            res.sendStatus(304);
        } else {
            game.players.splice(index, 1);
            res.sendStatus(204);      
        } 
    } else {
        res.sendStatus(404);
    }     
});


router.put("/game/:id/start", auth.verifyToken, async function (req, res) {
    let game = await games.find(function (item) {
        return item.id == req.params.id;
    });

    if (game) {
        if (game.creator.id === req.authdata.player.id) {
            game.status = "started"
            res.sendStatus(204);
        } else {
            res.sendStatus(304);
        }       
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;
