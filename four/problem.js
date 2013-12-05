var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: process.env.PORT || 9080});
var client = require('./setup');

wss.on('connection', function(socket) {
  // in this scenario we are the server
  // when a socket connects set up a listener for the
  // message event on the socket that
  // logs the message and replies "Whats up!"
});