var express = require('express')
  , http = require('http')
  , app = express()
  , server = http.createServer(app);

app.get('/' function (req,res){
  res.send('Hello /')
});

app.get('/world.html' function (req,res){
  res.send('Hello Hello')
});

server.listen(8000, funcion(){
  console.log(server.address().port + ' : is running');
});

//http://pyrasis.com/nodejs/nodejs-HOWTO//참고사이트
