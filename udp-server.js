const PORT = 33333;
const HOST = '127.0.0.1';

const dgram = require('dgram');
const server = dgram.createSocket('udp4');

// Print address and port when listening
server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

// Print message info when received
server.on('message', (message, remote) => {
  console.log(`server got: ${message} from ${remote.address}:${remote.port}`);
});

// Print error info and close server
server.on('error', (err) => {
  console.log(`server error: \n${err.stack}`);
  server.close;
});

// Start server
server.bind(PORT, HOST);
