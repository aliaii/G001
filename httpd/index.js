'use strict';

let http = require('http');
const routingTable = require('./config.json');
/*const routingTable = {
 '/': {
 url: '../htdocs/index.html',
 type: 'text/html'
 },
 '/styles.css': {
 url: '../htdocs/assets/css/styles.css',
 type: 'text/css'
 },
 '/SokobanClone_byVellidragon.png': {
 url: '../htdocs/assets/png/SokobanClone_byVellidragon.png',
 type: 'text/css'
 },
};
*/

let serve = (response, fname, datatype) => {
	let fs = require('fs');
	fs.readFile(fname, (err, data) => {
		if (err) {
			console.log(' 檔案讀取錯誤');
		}
		else {
			response.writeHead(200, {
				'Content-Type': datatype
		});
			response.write(data);
			response.end();
		}
	});
};

http.createServer((request, response) => {
	let fs = require('fs');
	let postData = ''; // POST 資料

// 利⽤ 'data' event 消耗掉 data chunk;
// 'end' event 才會被 fired
	request.on('data', (chunk) => {
		postData += chunk;
			console.log(
				' 接收的 POST data ⽚段 k: [' + chunk + '].'
			);
		});
	request.on('end', () => {
if (request.url in routingTable) {
		 let obj = routingTable[request.url];

		 serve(response, obj.url, obj.type);
		 }
		 else {
		 console.log(' 未定義的存取: ' + request.url);

		 response.end();
		}


	});
}).listen(8088);

 // log message to Console
console.log(' 伺服器啓動，連線 url: http://127.0.0.1:8088/');
