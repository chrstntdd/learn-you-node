let port = process.argv[2];
let url  = require('url');
let http = require('http');

let parseTime = function (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixTime(time) {
  return {
    unixtime: time.getTime()
  }
}

let parseReq = function (url) {
  let time = new Date(url.query.iso);
  switch (url.pathname) {
    case '/api/parsetime':
      return parseTime(time);
    case '/api/unixtime':
      return unixTime(time);
    default:
      return 'Error: Please enter a valid url endpoint';
  }
}


let server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'content-type': 'application/json'
  });
  url = url.parse(req.url, true)
  res.end(JSON.stringify(parseReq(url)));
  
}).listen(port, function () {
  console.log('Server listening on http://localhost:%s', port)
});
