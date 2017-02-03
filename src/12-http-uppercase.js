let port = process.argv[2];
let map = require('through2-map');
let http = require('http');

let server = http.createServer(function (req, res) {
  if (req) {
    req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(res)
  }
});

server.listen(port);

//REFACTOR.
//HANDLE ERRORS