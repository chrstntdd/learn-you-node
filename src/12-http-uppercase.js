let port = process.argv[2];
let map = require('through2-map');
let http = require('http');

let server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('Please send a post request.');
  }
  req.pipe(map(chunk =>
    chunk.toString().toUpperCase())).pipe(res);

}).listen(port);
