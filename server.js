// Require Express.js
const express = require('express');
const app = express();

let portNum = require('minimist')(process.argv.slice(2));
var port = portNum.port || 5000;

const server = app.listen(port, () => {
    console.log('App is running on port %PORT%'.replace('%PORT%', port))
})



function coinFlip() {
    let coinValue;
    let coinNum = Math.random();
    if (coinNum < 0.5 ) {
      coinValue = "heads";
    } else {
      coinValue = "tails";
    }
    return coinValue;
  }



app.get('/app', (req, res) => {
    res.status(200).end('The API is working')
    res.type('text/plain')
})


app.get('/app/flip', (req, res) => {
    res.status(200).json({ 'flip' : coinFlip()})
})


/*
app.get('/app/echo/:number', (req, res) => {
    res.status(200).json({ 'message': req.params.number })
})
*/

app.use(function(req, res){
    res.status(404).send("Endpoint does not exist")
    res.type("text/plain")
})