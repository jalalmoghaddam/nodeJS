const http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,'Content-Type: text/plain');
    response.end('Hello World')
}).listen(8181);

console.log('server is runing . . . ')