var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: process.env.PORT || 9080});
var client = require('./setup');

wss.on('connection', function(socket) {
  socket.on("message", function(msg){
    console.log(msg);
    socket.send("Whats up!");
  });
});