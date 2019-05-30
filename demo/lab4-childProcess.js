const http = require('http');
const {fork} = require('child_process');
const server = http.createServer();

server.on('request', (req, res) => {
    const childProcess = fork('lab4-longOperation.js');
    childProcess.send('start');
    childProcess.on('message', sum => {
        res.end(`Sum is ${sum}`);
    });

});

server.listen(3000);