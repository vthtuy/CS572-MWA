- Access by http://localhost:3000/?fileName=text.txt
- Used  Technique:
    + Create Reactive server by using Subcribe
    + Reactive server (app) will folk 1 child process to read the file
    + Child Process sends file content chunk by chunk, once finish will send 'done'
    + Server (app) receive message chunk by chunk write to response until receive 'done'