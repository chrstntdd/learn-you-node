let http   = require('http');
let fs     = require('fs');
let port   = process.argv[2];

let stream = fs.createReadStream(process.argv[3]);

let server = http.createServer(function (req, res) {
  if (req) {
    stream.pipe(res);
  }
}).listen(port);
