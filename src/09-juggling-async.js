let http = require('http');
let bl   = require('bl');

let count = 0,
  result  = [];

function printOutput() {
  for (let i = 0; i < 3; i++) {
    console.log(result[i]);
  }
}

function httpGetWrapper(index) {
  http.get(process.argv[2 + index], function (res) {
    res.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }
      result[index] = data.toString();
      count++;

      if (count === 3) {
        printOutput();
      }
    }))
  }).on('error', (e) => console.error(`Got error: ${e.message}.`));
}

for (let i = 0; i < 3; i++) {
  httpGetWrapper(i);
}
