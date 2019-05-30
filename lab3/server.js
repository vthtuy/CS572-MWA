var http = require('http');
var fs = require('fs');
var FILE = 'big.file';
const ENCODING = 'utf8';


 // ============= Read File With readFileSync ================
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var data = readFileSync();
    // console.log(data);
    res.write(data);
    res.end('Hello World!');
}).listen( 4000, () =>  console.log('listening on 4000') );


function readFileSync() {
   return fs.readFileSync(FILE, ENCODING);
}

 // ============= Read File With asynchronous But Buffer ================
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    readFile(req,res);
     
  //  res.end('Hello World!'); // end here will get the error exception
}).listen( 4001, () =>  console.log('listening on 4001 readFile') );

function readFile(req,res) {
     fs.readFile(FILE, {encoding:ENCODING}, (err,data) =>{
        //res.writeHead(200,{'Content-Type':'application/file'});
        res.write(data);
        res.end();
    });
 }

 // ============= Read File With Stream without pipe() ================
 http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var data = readFileStream(res); 
    
    //res.end('Hello World!' + data);
}).listen( 4002, () =>  console.log('listening on 4002 readFileStream') );

 function readFileStream(res) {
    var readable = fs.createReadStream(FILE, ENCODING);
    var result = [];
    readable.on('data', function(chunk) {
        // console.log(chunk);
       // result = result + chunk;
       result.push(chunk);
    });
    console.log(result.toString());
    res.write(result.toString());
    res.end();

 }

 // ============= Read File With Stream pipe() ================
 http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var data = readFileStreamPipe(res);
    console.log(data);
    res.end('Hello World!');
}).listen( 4003, () =>  console.log('listening on 4003 readFileStreamPipe') );
 function readFileStreamPipe(res) {
    return fs.createReadStream(FILE, ENCODING).pipe(res);
 }