// 52274번 포트의 음악 파일 제공

// 모듈 추출
var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {
	// 이미지 파일 읽음
	fs.readFile('TAEYEON.mp3', function (error, data) {
		response.writeHead(200, { 'Content-Type' : 'audio/mp3' });
		response.end(data);
	});
}).listen(52274, function () {
	console.log('127.0.0.1:52274 연결 성공');
});