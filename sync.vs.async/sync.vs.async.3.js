const fs = require('fs');
const dir = process.argv[2] || '.';
const files = fs.readdirSync(dir);
console.log(process.argv);
console.log(dir);

// files is an array of all of the files in the current directory
for (let filename of files) {
    console.log(filename);
}