const http = require('http');
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('path/to/private.key'),
  cert: fs.readFileSync('path/to/certificate.crt')
};

// 创建 HTTP 服务器
const httpServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, HTTP!\n');
});

// 创建 HTTPS 服务器
const httpsServer = https.createServer(options, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, HTTPS!\n');
});

// 启动服务器
httpServer.listen(80, () => {
  console.log('HTTP server started on port 80');
});

httpsServer.listen(80, () => {
  console.log('HTTPS server started on port 80');
});
