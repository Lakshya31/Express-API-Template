// Module Imports and Initialization
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Initializing Host and Port from Environment
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

// Logger middleware which logs the IP of request sender
const Logger = function (req, res, next) {
    console.log(req.url, req.method, req.ip, new Date());
    next();
}

// Initializing all the middleware
app.use(bodyParser.json());
app.use(cors());
app.use(Logger);


// Routes

// Basic Route for Testing API
app.get("/", (req, res) =>{
    res.json("Things seem to be working fine!");
})

// Running the API on designated host and port
app.listen(port, host, () => {
    console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------")
    console.log(`\nServer is listening to port ${port} on host: ${host}!\n`);
})