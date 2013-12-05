var WebSocket = require('ws');
var server = require('./setup'); // load server

var port = process.env.PORT || 9080;

setTimeout(function(){

  var socket = new WebSocket('ws://localhost:'+port+'/test');

  // in this scenario we are the browser
  // we have an open websocket connection to a socket server
  // on 'open', send it 'Hello!' and log what it sends back
  socket.on('open', function(){
    socket.send('Hello!');
  });

  socket.on("message", function(data){
    console.log("client received:", data);
  });

}, 2000);