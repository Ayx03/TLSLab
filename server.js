// Node.js 本身不支持在同一个端口上同时处理 HTTP 和 HTTPS 请求。
// 通常情况下，HTTP 服务器监听 80 端口，而 HTTPS 服务器监听 443 端口。
// 要在同一个端口上处理 HTTP 和 HTTPS 请求，需要使用反向代理服务器或负载均衡器来实现。



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
