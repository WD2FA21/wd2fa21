// Bring in some modules, including the http module
const http = require('http');
const url = require ('url');

function start(route, handle) {
    http.createServer((request, response) => {
        let postData = '';
        let chunkCount = 0;
        let pathname = url.parse(request.url).pathname;
        
        request.setEncoding('utf8');
        // Listen for the chunks
        request.addListener('data', (postDataChunk) => {
           postData += postDataChunk;
           chunkCount++;
           console.log(`Got Chunck #${chunkCount}: ${postDataChunk}`);
        });
        // When done with all the chunks
        request.addListener('end', () => {
            route(handle, pathname, response, postData);
        });
        
    }).listen(process.env.PORT);
    
    console.log('Server has started!');
}

exports.start = start;