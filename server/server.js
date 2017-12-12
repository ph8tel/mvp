const http = require('http');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;

var requestHandler = function (req, res) {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World\n');
  if ( req.method = 'GET' && req.url ==='/' ) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream("../index.html").pipe(res);
  } else if (req.method = 'GET' && req.url === '/alaska.html') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream("../alaska.html").pipe(res);
  } else if (req.method = 'GET' && req.url === '/merica') {
    console.log('RAN with ', req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream("../merica.html").pipe(res);
  } else if (req.method = 'GET' && req.url === '/mexico.html') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream("../mexico.html").pipe(res);
  } else if (req.method = 'GET' && req.url === '/canadaEast.html') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream("../canadaEast.html");
  } else if (req.method = 'GET' && req.url === '/canadaWest.html') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream("../canadaWest.html").pipe(res);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Sorry, 404. not found')
  }
};
const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// const http = require('http')
// const port = 3000

// const requestHandler = (request, response) => {
//   console.log(request.url)
//   response.end('Hello Node.js Server!')
// }

// const server = http.createServer(requestHandler)

// server.listen(port, (err) => {
//   if (err) {
//     return console.log('something bad happened', err)
//   }

//   console.log(`server is listening on ${port}`)
// })