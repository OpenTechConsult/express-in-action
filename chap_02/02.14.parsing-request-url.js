//require Node's built-in http module
const http = require('node:http');


// parsing the request url with a request handler function
function requestHandler(req, res) {
    if (req.url === "/") {
        res.end("Welcome to the home page");
    } else if (req.url === "/about") {
        res.end("Welcome to the about page!");
    } else {
        res.end("Error! File not found.");
    }
}

// creates a server that uses our function to handle request
const server = http.createServer(requestHandler);

// starts the server listening on port 3000
server.listen(3000);