let fs   = require('fs');
let path = require('path');

let file = process.argv[2];
let ext  = '.' + process.argv[3];

fs.readdir(file, function (err, list) {
  if (err) {
    console.error(err)
  }
  list.forEach(function (filename) {
    let ext1 = path.extname(filename);
    if (ext === ext1) {
      console.log(filename);
    }
  });
});
