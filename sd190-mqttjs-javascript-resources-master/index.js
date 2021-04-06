
var client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

client.on('connect', function () {
    console.log('connected')
    client.subscribe('moya/messages', function (err) {
        if (err) {
            console.error("Error in subscribing topic!")
        }
    })
})

client.on('message', function (topic, message) {
    console.log(message.toString())
    document.getElementById('tabledata').innerHTML += `<tr><td>${topic}</td><td>${message}</td></tr>`
})


function mypublish() {
  if (document.getElementById('publish-input').value != "" && document.getElementById('message-input').value != "") {
      client.publish(document.getElementById('publish-input').value, document.getElementById('message-input').value)
  } else {
      alert("Input topic and payload entry! ")
  }
}

function mysubscribe() {
  if (document.getElementById('subscribe-input').value != "") {
      client.subscribe(document.getElementById('subscribe-input').value, function (err) {
          if (err) {
              console.error("Error in subscribing topic!")
          }
      })
  } else {
      alert("Input topic entry! ")
  }
}
