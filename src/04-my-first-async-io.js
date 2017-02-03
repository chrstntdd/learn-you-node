let fs   = require('fs');
let file = process.argv[2];

fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    console.error(err);
  }
  let lines = data.split('\n').length - 1;
  console.log(lines);
});
