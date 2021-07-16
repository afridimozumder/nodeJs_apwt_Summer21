const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    if(req.url == "/home"){
        console.log('test page');
        /* res.write('this is home page');
        res.end(); */
        fs.createReadStream('./test.html').pipe(res);

    }
})

server.listen(5555);
console,console.log("server started at 5555");