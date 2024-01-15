//require Node's built-in http module
const http = require('node:http');

// defines a function that'll handle incoming HTTP requests
function requestHandler(request, response) {
    console.log('In comes a request to: ' + request.url);
    response.end("Hello, World!");
}

// creates a server that uses our function to handle request
const server = http.createServer(requestHandler);

// starts the server listening on port 3000
server.listen(3000);