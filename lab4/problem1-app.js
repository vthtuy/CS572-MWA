const {Subject} = require('rxjs')
const http = require('http');
const {fork} = require('child_process');
const queryString = require('querystring');
const url = require('url');
 
// Reactive Server
const subject = new Subject();
subject.subscribe(proceedFile);

http.createServer( (req, res) => {
    subject.next( {req : req, res : res });
}).listen(3000,
    () => console.log('3000') ); 

    
function proceedFile(reqres) {
    var queryData = url.parse(reqres.req.url, true); 
    var res = reqres.res;

    console.log(queryData.query.fileName);

    const childProcess = fork('problem1-childProcess.js');

    childProcess.send(queryData.query.fileName);
    childProcess.on('message', message => { 

        if (message == "done") {
            console.log('App Done');
            res.write("Read File Done!!!")
        } else {
            // receive file content chunk by chunk
            var chunk = message ;
            
            res.write(chunk);
        }

    });
}

