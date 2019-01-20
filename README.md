# Chatter Box
Chat client built over Socket.io for multiple people to communicate

## Socket.io
Socket.IO is composed of two parts:
* A server that integrates with (or mounts on) the Node.JS HTTP Server: `socket.io`
* A client library that loads on the browser side: `socket.io-client`

### TODO
* Broadcast a message to connected users when someone connects or disconnects.
* Add support for nicknames.
* Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
* Add “{user} is typing” functionality.
* Show who’s online.
* Add private messaging.

### Development
* npm i
* npm start

### Tech Stack
* Express.js
* Socket.io
