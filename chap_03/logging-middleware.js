const express = require('express');
const http = require('http');

const app = express();


// The logging middleware
app.use(function (request, response, next) {
    console.log("In comes a " + request.method + " to " + request.url);
    next();
});

// sends the actual response
app.use(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello, world!");
});

http.createServer(app).listen(3000);

