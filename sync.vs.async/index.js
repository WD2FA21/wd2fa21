const fs = require('fs'),
    path = require('path'), 
    gm   = require('gm');
    
 
// Install on command line:
// npm init
// npm install gm
// sudo apt update
// sudo apt install graphicsmagick

const allowed_extensions = ['.png', '.jpg', '.gif'];

fs.readdir('.', (err, files) => {
    if (err) {
        console.log(`Error Finding Files. Error: ${err}`);
    } else {
        for (let filename of files) {
            if (allowed_extensions.indexOf(path.extname(filename)) > -1) {
                gm(filename).size((err, values) => {
                   if (err) {
                       console.log(`Error: ${err}`);
                   } else {
                       // Let's Resize out image
                       const width = Math.round(values.width / 2);
                       const height = Math.round(values.height / 2);
                       gm(filename).resize(width, height)
                                   .write(`./${width}_${height}_${filename}`, (err) => {
                                      if (err) {
                                          console.log(`Error: ${err}`);
                                      } 
                                   });
                   }
                });
            }
        }
    }
});


console.log('Program end?');