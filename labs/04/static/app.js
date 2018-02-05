const express = require('express');
const app = express();

// app.use(express.static('frontend'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('static'));


app.use(function (req, res, next){
    console.log("HTTP request", req.method, req.url, req.body);
    next();
});

app.post('/', function (req, res, next) {
    console.log("hello");
    res.json(req.body);
});

app.post('/api/messages/', function (req, res, next) {
    res.json({"id": 48});
});

app.get('/api/messages/', function (req, res, next) {
    res.json([{"content": "Hello World!", "author": "Me"}]);
});

app.delete('/api/messages/:id/', function (req, res, next) {
    res.json({"id": 48});
});

app.use(function (req, res, next){
    console.log("HTTP Response", res.statusCode);
});

const http = require('http');
const PORT = 3000;

http.createServer(app).listen(PORT, function (err) {
    if (err) console.log(err);
    else console.log("HTTP server on http://localhost:%s", PORT);
});