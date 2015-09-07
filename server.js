var path = require('path');
var express = require('express');
var server = global.server = express();

server.set('port', process.env.PORT || 5000);
server.use(express.static(path.resolve(__dirname, 'build')));

var templateFile = path.resolve(__dirname, 'build/index.html');

server.get('/', function(req, res) {
  res.sendFile(templateFile);
});

server.listen(server.get('port'), function() {
  if (process.send) {
    process.send('online');
  } else {
    console.log('The server is running at http://localhost:' + server.get('port'));
  }
})