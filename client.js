var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.1.106:1883')

client.on('connect', function () {
  // client.subscribe('testing')
  
  var data = {
  	'id_healbox' : 123,
  	'id_reminder' : '245',
  	'data' : 'H'
  }
  client.publish('testing', JSON.stringify(data))
})

// client.subscribe('testing');
client.subscribe('/outTopic')
client.on('message', function (topic, message) {
  // message is Buffer
  var data = message.toString();
  console.log(data)
  client.end()
})

