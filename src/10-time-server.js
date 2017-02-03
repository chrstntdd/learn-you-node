let strftime = require('strftime');
let net = require('net');

let server = net.createServer(function(socket){
    socket.end(strftime('%F %R') + '\n');
}).listen(process.argv[2]);