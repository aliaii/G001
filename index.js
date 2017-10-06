var http = require('http');

 http.createServer((request, response) => {
 let fs = require('fs')

 fs.readFile('index.html', (err, data) => {
 response.writeHead(200, {
'Content-Type': 'text/html'
 });
 response.write(data);
 response.end();
});
 }).listen(8088);

 // log message to Console
 console.log('Server running at http://127.0.0.1:8088/');
