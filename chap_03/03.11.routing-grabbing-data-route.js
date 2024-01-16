const http = require('node:http');
const path = require('node:path');
const express = require('express');
const logger = require('morgan');

const app = express();

// logging every request using morgan
app.use(logger('short'));

//sets up static file middleware like before
// every request goes through this middleware
// and continues on if no files are found.
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

/// called when a request to the root is made
app.get('/', function (request, response) {
    response.end('Welcome to my home page');
});

// called when a request to /about is made
app.get('/about', function (request, response) {
    response.end('Welcome to the about page!');
});

// called when a request to /weather is made
app.get('/weather', function (request, response) {
    response.end('The current weather is NICE.');
});

// specified that the hello part of the route is fixed
app.get('/hello/:who', function (request, response) {
    // request.params has a property called who.
    response.end('Hello, ' + request.params.who + '.');
});


// if you miss the others, you will wind up here
app.use(function (request, response) {
    response.statusCode = 404;
    response.end('404!');
})

http.createServer(app).listen(3000);