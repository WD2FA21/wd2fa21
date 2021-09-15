// Bring in some modules, including the http module
const http = require('http');

http.createServer((request, response) => {
    console.log('Request Received');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World!, this is CSCI 32!');
    response.end();
    console.log('Request Ended');
}).listen(process.env.PORT);

console.log('Server has started!');