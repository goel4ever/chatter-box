const express = require('express');
const app = express();
const socket = require('socket.io');

app.use(express.static('public'));

// App server setup
const server = app.listen(3000, () => {
  console.log('listening on *:3000');
});

// Socket.io setup
const io = socket(server);

io.on('connection', (connection) => {
  console.log(`User connected with ID ${connection.id}`);

  connection.on('chat', (data) => {
    console.log('message: ' + JSON.stringify(data));
    io.sockets.emit('chat', data);
  });

  // Handle typing event
  connection.on('typing', function(data){
      connection.broadcast.emit('typing', data);
  });

  connection.on('disconnect', () => {
    console.log('user disconnected');
  });
});
