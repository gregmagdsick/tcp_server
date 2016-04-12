const net = require('net');
const writeLog = require(__dirname + '/writeLog');


const server = net.createServer((socket) => {
  socket.pipe(writeLog());
});

server.listen(7000, () => {
  process.stdout.write('server listening on 7000\n');
});
