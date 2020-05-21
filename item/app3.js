var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app).listen(80);


app.get('/carInfo', function (req,res){
  var carReqName = req.query.str1;
  var colorReqName = req.query.str2;
  var carPrice =[
    {brandCode:"0", price: 2100},
    {brandCode:"1", price: 1300},
    {brandCode:"2", price: 1500},
    {brandCode:"3", price: 3500},
    {brandCode:"4", price: 5500}
  ];

  var colorPrice =[
    {colorCode:"0", price: 210},
    {colorCode:"1", price: 130},
    {colorCode:"2", price: 101},
    {colorCode:"3", price: 300},
    {colorCode:"4", price: 200}
  ];



  for(var i=0; i=carPrice.length; i++){
    var brand - brand[i];
    if(carReqName == carPrice.brandCode){
      totalPrice += carPrice.price;
      console.log(carPrice.price);
    }
  }

  for(var i=0; i=colorPrice.length; i++){
    var brand - brand[i];
    if(colorReqName == colorPrice.brandCode){
      totalPrice += colorPrice.price;
      console.log(colorPrice.price);
    }
  }
res.send(`이 차의 가격은 ${totalPrice}`)


});



app.get('/select', function (req, res) {
  res.sendfile("select2.html");

});

// server.listen(80, function(){
//   console.log(server.address().port + ' : is running');
// });

//http://pyrasis.com/nodejs/nodejs-HOWTO//참고사이트
