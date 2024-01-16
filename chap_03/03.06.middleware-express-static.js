const path = require('node:path');
const http = require('node:http');
const express = require('express');

const app = express();

// sets up the public path, using Node's path module
const publicPath = path.resolve(__dirname, "public");

// send static files from the publicPath directory
app.use(express.static(publicPath));

app.use(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Look like you didn't find a static file");
})

http.createServer(app).listen(3000);

