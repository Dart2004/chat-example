var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  io.emit('chat message', "````New User joined the chat");
  socket.on('chat message', function(msg){
    for (letter in msg){
      msg=msg.replace(":)","😀");
      msg=msg.replace(":(","😟");
      msg=msg.replace(":|","😐");
      msg=msg.replace(";)","😉");
      msg=msg.replace(";(","😭");
      msg=msg.replace(":smile:","😀");
      msg=msg.replace(":frown:","😟");
      msg=msg.replace(":neutral:","😐");
      msg=msg.replace(":wink:","😉");
      msg=msg.replace(":cry:","😭");
      msg=msg.replace("😀","//*😀*//");
      msg=msg.replace("😟","//*😟*//");
      msg=msg.replace("😐","//*😐*//");
      msg=msg.replace("😉","//*😉*//");
      msg=msg.replace("😭","//*😭*//");
    }
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
