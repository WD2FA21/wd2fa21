const fs = require('fs');

// Sync / Blocking File

// let contents = fs.readFileSync('hello.txt', 'utf8');
// console.log(contents);
// console.log('Luke');

// contents = fs.readFileSync('goodbye.txt', 'utf8');
// console.log(contents);
// console.log('Luke');

// Async / Non-Blocking
fs.readFile('hello.txt', 'utf8', (err, contents) => {
   console.log(contents); 
});

console.log('Luke');

fs.readFile('goodbye.txt', 'utf8', (err, contents) => {
   console.log(contents); 
});

console.log('Luke');