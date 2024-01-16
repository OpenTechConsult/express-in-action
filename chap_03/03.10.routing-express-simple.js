const path = require('node:path');
const http = require('node:http');
const express = require('express');
const logger = require('morgan')


const app = express();

// logging all incoming requests
app.use(logger('short'));

// sets up static file middleware
// every request goes through this middleware and continues on
// if no files are found
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// called when a request to the root is made
app.get('/', function (request, response){
    response.end('Welcome to my home page!');
});

// called when request to /about comes in
app.get('/about', function (request, response) {
    response.end('Welcome to the about page');
});

// called when request to /weather comes in
app.get('/weather', function (request, response) {
    response.end('The current weather is nice');
});

app.use(function (request, response) {
    response.statusCode = 404;
    response.end('404');
});

http.createServer(app).listen(3000);

