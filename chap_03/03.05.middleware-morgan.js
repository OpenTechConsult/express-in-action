const express = require('express');
var logger = require('morgan');
const http = require('http');

const app = express();

// The logging middleware
app.use(logger("short"));

app.use(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello, world!");
})

http.createServer(app).listen(3000);

