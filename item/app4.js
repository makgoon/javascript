var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app).listen(80);


app.get('/viewresult', function (req,res){
  var firstvalue = req.query.str1;
  var secondvalue = req.query.str2;
  var thirdvalue = req.query.str3;

  var myArray = [firstvalue, secondvalue, thirdvalue];
  var max = Math.max.apply(null, myArray);

res.send(`최대값은 ${max}`)


});



app.get('/select', function (req, res) {
  res.sendfile("searchmax.html");

});

// server.listen(80, function(){
//   console.log(server.address().port + ' : is running');
// });

//http://pyrasis.com/nodejs/nodejs-HOWTO//참고사이트
