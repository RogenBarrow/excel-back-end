const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();


//handlers
const ping = require("./handlers/ping");
const addUser = require("./handlers/addUser");

//Endpoint
router.get("/ping", (req, res) => ping(req, res));
router.post("/adduser", jsonParser, (req, res) => addUser(req, res));

module.exports = router;