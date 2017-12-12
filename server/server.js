const http = require('http');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;

var requestHandler = function (req, res) {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World\n');
  if ( req.method = 'GET' && ( req.url ==='/' || req.url === '/index.html') ) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream("../html/index.html").pipe(res);
  } else if (req.method = 'GET' && req.url === '/alaska') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream("../html/alaska.html").pipe(res);
  } else if (req.method = 'GET' && req.url === '/merica') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream("../html/merica.html").pipe(res);
  } else if (req.method = 'GET' && req.url === '/mexico' ) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream("../html/mexico.html").pipe(res);
  } else if (req.method = 'GET' && req.url === '/canadaEast') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream("../html/canadaEast.html").pipe(res);
  } else if (req.method = 'GET' && req.url === '/canadaWest') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream("../html/canadaWest.html").pipe(res);
  }
  //begin search requsts
    else if (req.method = 'GET' && req.url === '/search?searchFor=mexico') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream("../html/mexico.html").pipe(res);
  } else if (req.method = 'GET' && req.url === '/search?searchFor=america') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream("../html/merica.html").pipe(res);
  } else if (req.method = 'GET' && req.url === '/search?searchFor=alaska') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream("../html/alaska.html").pipe(res);
  } else if (req.method = 'GET' && req.url === '/search?searchFor=canada') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream("../canadaWest.html").pipe(res);
  } else if (req.method = 'GET' && req.url === '/search?searchFor=quebec') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream("../html/merica.html").pipe(res);
  }
  //begin image requests
    else if (req.method = 'GET' && req.url === '/images/01Alaska.gif') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/gif');
    fs.createReadStream("../images/01Alaska.gif").pipe(res);
  } else if (req.method = 'GET' && req.url === '/images/3-coldAmericaFrenchies.gif') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/gif');
    fs.createReadStream("../images/3-coldAmericaFrenchies.gif").pipe(res);
  } else if (req.method = 'GET' && req.url === '/images/1-coldAmerica.gif') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/gif');
    fs.createReadStream("../images/1-coldAmerica.gif").pipe(res);
  } else if (req.method = 'GET' && req.url === '/images/11murica.gif') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/gif');
    fs.createReadStream("../images/11murica.gif").pipe(res);
  } else if (req.method = 'GET' && req.url === '/images/21hotAmerica.gif') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/gif');
    fs.createReadStream("../images/21hotAmerica.gif").pipe(res);
  }
  // 404 catch
  else {
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