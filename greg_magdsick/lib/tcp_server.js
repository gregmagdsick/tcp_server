const net = require('net');
const writeLog = require(__dirname + '/writeLog');

const server = net.createServer((socket) => {
  socket.writeStream
  // socket.on('data', (pack) => {
  //   var date = new Date();
  //   var time = getTime(date);
  //   pack.pipe(writeLog(time));
  // });
});

var getTime = (dateObj) => {
  var h = dateObj.getHours();
  var m = dateObj.getMinutes();
  var s = dateObj.getSeconds();
  return h + '_' + m + '_' + s;
}

server.listen(7000, () => {
  process.stdout.write('server listening on 7000\n');
});
