var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: process.env.PORT || 9080});

wss.broadcast = function(data) {
  for(var i in this.clients) {
    this.clients[i].send(data);
  }
};

wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    console.log('server received:', message);
    ws.send('Hey!');
  });
});

module.exports = wss;