// Require Express.js
const express = require('express');
const app = express();

let portNum = require('minimist')(process.argv.slice(2));
var port = portNum.port || 5000;

const server = app.listen(port, () => {
    console.log('App is running on port %PORT%'.replace('%PORT%', port))
})