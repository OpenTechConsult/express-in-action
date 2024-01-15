const express = require('express');
const http = require('http');

const app = express();


// The logging middleware
app.use(function (request, response, next) {
    console.log("In comes a " + request.method + " to " + request.url);
    next();
});

app.use(function (request, response, next) {
    var minute = (new Date()).getMinutes();
    if ((minute % 2) === 0) {
        next();
    } else {
        response.statusCode = 403;
        response.end("Not authorized.");
    }
});

// sends the secret information
app.use(function (request, response) {
    response.end('Secret info: the password is "swordfish"!');
});

http.createServer(app).listen(3000);

