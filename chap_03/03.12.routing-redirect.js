const http = require('node:http');
const path = require('node:path');

const express = require('express');
var logger = require('morgan');

// instantiate an express app
const app = express();

// log all incoming request
app.use(logger('short'));

// sets up static file middleware
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// called when a request to the root is made
app.get('/', function (request, response) {
    response.end('Welcome to my home page');
});

// called when a request to the /aboud is made
app.get('/about', function(request, response) {
    response.end('Welcome to the about page');
});

// called when a request to /weather is made
app.get('/weather', function(request, response) {
    response.end('The current weather is NICE!');
});

//  specifies that the hello part of the route is fixed
app.get('/hello/:who', function (request, response) {
    response.end('Hello, ' + request.params.who + '.');
});

app.get('/world', function (request, response) {
    response.redirect('/hello/world');
});

app.get('/express', function (request, response) {
    response.redirect('http://expressjs.com');
});

app.use(function(request, response) {
    response.statusCode = 404;
    response.end('404!');
});

http.createServer(app).listen(3000);