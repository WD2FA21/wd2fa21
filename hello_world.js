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



console.log('Hello');

pauseComputer(100, 'Long Thing Done!', str => console.log(str));

console.log('Goodbye');


// A simple function to sleep our program. To help simulate code that takes
// a long time to run
function pauseComputer(ms, words, callback)
{
    setTimeout(callback, ms, words);
}












