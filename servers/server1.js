//set up http server with Java command library already installed.
const http = require('http');
const host = 'localhost';
const port = 8080;
//set up server to read from and HTML file with 'fs' (Contains readFile() function
const fs = require('fs').promises;

const requestListener = function (req, res) {
  console.log(__dirname);
  fs.readFile(__dirname + '../src/index.html')
    .then((contents) => {
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(contents);
    })
    .catch((err) => {
      res.writeHead(500);
      res.end(err);
      return;
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server 1 is online and listening on http://${host}:${port}`);
});
