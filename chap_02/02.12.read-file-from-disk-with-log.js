const fs = require('node:fs');

const options = {
    encoding: "utf-8"
};

fs.readFile('myfile.txt', options, function(err, data) {
    if (err) {
        console.error('Error reading the file!');
        return;
    }
    console.log(data.match(/x/gi).length + " letter X's");
});

console.log("Hello World!");