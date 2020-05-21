var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app).listen(80);

app.get('/', function (req,res){
  res.send('Hello /')
});

app.get('/world.html', function (req,res){
  res.send('Hello Hello')
});

app.get('/sum', function (req,res){
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  console.log(num1, num2);
  res.send(`합은 ${num1 + num2} 입니다.`);

});

app.get('/sumForm', function (req, res) {
  res.sendfile("sumForm.html");

});

// server.listen(80, function(){
//   console.log(server.address().port + ' : is running');
// });

//http://pyrasis.com/nodejs/nodejs-HOWTO//참고사이트
