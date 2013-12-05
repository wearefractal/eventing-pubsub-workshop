var redis = require("redis");
var client = redis.createClient();

// publish a Hello World! to test-channel
// Use client.publish