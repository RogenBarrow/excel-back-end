require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const { port, ExcelAPI } = require("./config/configuration");

const router = require("./router")

app.use(router);
app.use(bodyParser.json());
//app.use(bodyParser.text({ type: "application/json" }));

app.listen(port, () => {
    console.log(`
      Excel Arts Academy API
      Running at: http://localhost:${port}
      Started at ${new Date().toLocaleString()} local time
  
      Test Endpoint: http://localhost:${port}/test
      Ping Endpoint: http://localhost:${port}/ping
  
      Configured Mock Server is: ${ExcelAPI};
    `)
  })