// setting up views in express
const express = require('express');
const path = require('node:path');
const http = require('node:http');

const app = express();

// tells express that our view will be in a folder called views
app.set('views', path.resolve(__dirname, 'views'));
// tell express that we are going to use the ejs templating engine
app.set('view engine', 'ejs');


// rendering a view from express
app.get('/', function (request, response) {
    response.render('index', {
        message: "Hey everyone! This is my page"
    });
});


http.createServer(app).listen(3000);

