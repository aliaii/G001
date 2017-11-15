'use strict';

let http = require('http');

http.createServer((request, response) => {
    // 取得 node.js 的 fs 模組
    let fs = require('fs')

    fs.readFile('../htdocs/index.html', (err, data) => {
        response.writeHead(200, {
        'Content-Type': 'text/html'
        });

        response.write(data);

        response.end();
    });
}).listen(8088);

// log message to Console
console.log(' 伺服器啟動，連線 url: http://127.0.0.1:8088/');
