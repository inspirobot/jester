const express = require("express");
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const config = require("./config");

const cors = require('cors');
const app = express();
app.use(cors());
app.options('*', cors());  // enable pre-flight

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());


app.use("/api/v1/wizard", require("./routes/wizard"));
app.use("/api/v1/lobby", require("./routes/lobby"));
app.use("/api/v1/authenticate", require("./routes/authenticate"));

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Wizard API",
      version: "0.1.0",
      description:
        "The game of Wizard",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "InspiroBot",
        url: "https://github.com/inspirobot",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000/",
      },
      {
        url: "https://game-wizard.herokuapp.com/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.use(express.static(`${__dirname}/build`))
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(`${__dirname}/build/index.html`);
});

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT);

console.debug("Server listening on port: " + PORT);