const fs = require('fs');
let FILE = ''; 
let ENCODING = 'utf8';

process.on('message', (fileName) => {
    console.log('Child Process file name: ', fileName);
    FILE = fileName;

    readFileStream(FILE);  
}); 

function readFileStream(fileName) {

    var readable = fs.createReadStream(FILE, ENCODING);
    var result = [];
    readable.on('data', function(chunk) { 
       process.send(chunk);
    });
    readable.on('end', function() {
        console.log('Child Process Done');
        process.send('done');
        process.exit(1);
   }); 

 }

