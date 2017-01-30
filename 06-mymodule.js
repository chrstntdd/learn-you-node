let fs   = require('fs');
let path = require('path');


module.exports = function (directory, filter, callback) {
  fs.readdir(directory, function (err, list) {
    if (err) return callback(err);
    list = list.filter(function (file) {
      return path.extname(file) === '.' + filter;
    });
    return callback(null, list);
  });
}
