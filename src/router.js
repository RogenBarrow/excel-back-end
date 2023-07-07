const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();


//handlers
const ping = require("./handlers/ping");
const addUser = require("./handlers/addUser");
const getUser = require("./handlers/getUser");

//Endpoint
router.get("/ping", (req, res) => ping(req, res));
router.get("/getuser", jsonParser,  (req, res) => getUser(req, res));
router.post("/adduser", jsonParser, (req, res) => addUser(req, res));

module.exports = router;