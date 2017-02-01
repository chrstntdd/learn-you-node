let http = require('http');
let bl = require('bl');

let url = process.argv[2];

http.get(url, function (res) {
  res.pipe(bl(function (err, data) {
    if (err) {
      console.error(error)
    }
    console.log(data.length);
    console.log(data.toString());
  }))
}).on('error', (e) => console.log(`Got error: ${e.message}.`));
