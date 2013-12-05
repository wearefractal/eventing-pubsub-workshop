var redis = require("redis");

var client = redis.createClient();
var subclient = redis.createClient();

// a JSON object is being published to test-channel
var sendMessage = function(){
  var obj = {
    test: "Hello World!"
  };

  client.publish("test-channel", JSON.stringify(obj));
};

setTimeout(sendMessage, 2000);

// subscribe to the channel using subclient.subscribe
// since all redis messages need to be strings
// you will need to parse the object
// log the parsed message