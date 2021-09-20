// Write "Hello World to STDOUT"
/*

- User should be able to use our application with a web browser
- User should see a welcome page when we go to localhost.com:8082/start
    -Page to display a file upload form
- Images upload to /upload and is displayed after upload is finished

Application Stack?
-Serve Web Pages, so an HTTP Server
-Handle request to different "pages", so a router
-Request Handler to fulfill the requests
-View logic to handle the display back to the user
-Upload Handling
*/


const exec = require('child_process').exec;

function f() {
    console.log('Handling Start Request');
    
    let content = 'Empty';
    
    exec('ls -lah', (error, stdout, stderr) => {
       content = stdout;
       console.log(content);
    });
    
    return content;
}

console.log('before f()');
console.log(f());
console.log('after f()');












