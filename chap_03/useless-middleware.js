// requires the express module just as you require other modules
const express = require('express');
const http = require('http');

// calls the express function to start a new express application
const app = express();

function myFunMiddleware(request, response, next) {
    // ...

    // when finished, calls next() to defer to the next middleware in the chain
    next();
}

// middleware
app.use(function (request, response) {
    console.log("In comes a request to: " + request.url);
    response.end("Hello, World!");
});

// start the server
http.createServer(app).listen(3000);

