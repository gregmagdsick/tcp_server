const net = require('net');
const fs = require('fs');

const server = net.createServer((socket) => {
  socket.pipe(process.stdout);
});

server.listen(7000, () => {
  process.stdout.write('server listening on 7000\n');
});
