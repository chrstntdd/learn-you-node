let port = process.argv[2];
let url = require('url');
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
  if (url.pathname === '/api/parsetime') {
    return parseTime(new Date(url.query.iso));
  } else if (url.pathname === '/api/unixtime') {
    return unixTime(new Date(url.query.iso));
  } else {
    return 'Error: Please enter a valid url endpoint'
  }
}

let server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'content-type': 'application/json'
  });
  url = url.parse(req.url, true)
  res.end(JSON.stringify(parseReq(url)))

});

server.listen(port, function () {
  console.log('Server listening on http://localhost:%s', port)
});


//REFACTOR + HANDLE ERRORS.