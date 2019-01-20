// Make connection
const socket = io();

socket.on('chat message', function(msg){
  console.log(msg);
});

// Query DOM
const message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');

// Emit events
btn.addEventListener('click', function(){
  console.log(message.value);
  console.log(handle.value);

  socket.emit('chat', {
      message: message.value,
      handle: handle.value
  });
  message.value = "";
});

message.addEventListener('keypress', function(){
  socket.emit('typing', handle.value);
})

// Listen for events
socket.on('chat', function(data){
  feedback.innerHTML = '';
  output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
  feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});
