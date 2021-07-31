/* const http = require('http');
const fs = require('fs'); */

import fs from 'fs';
import http from 'http';
import {User} from './User.js';
import Button  from './Button.js';

const user1 = new User('Afridi', '11', 'CSE');

const server = http.createServer((req, res)=>{
    if(req.url == "/home"){
        console.log('test page');
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(`${user1.getName()}`);
        res.write(Button('Create'));
        res.write(Button('Delete'));
        res.write(Button('Update'));
        res.end();
        fs.createReadStream('./test.html').pipe(res);

    }
    else{
        res.write('404 Not Found!');
        res.end();
    }
})

server.listen(5555);
console.log("server started at 5555");