let mymodule = require('./06-mymodule');

let dir    = process.argv[2];
let filter = process.argv[3];


mymodule(dir, filter, function (err, list) {
  if (err) {
    console.error(err)
  }
  list.forEach(function (file) {
    console.log(file);
  });
});
