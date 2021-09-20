function route(handle, pathname, response, postData) {
    console.log(`Going to route request for ${pathname}`);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData);
    } else {
        console.log(`No request handler found for ${pathname}, 404!`);
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write('404 - Not Found');
        response.end();
    }
    
}

exports.route = route;