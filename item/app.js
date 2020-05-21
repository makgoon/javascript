var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app).listen(80);


app.get('/itemForm', function (req,res){
  var num1 = Number(req.query.num1);

  console.log(num1);

  // if (num1 < 1000){
  //   res.send('구매불가')
  // } else if (num1 < 5000) {
  //   res.send('item1')
  // } else if (num1 < 10000) {
  //   res.send('item2')
  // } else if (num1 < 30000) {
  //   res.send('item3')
  // } else if (num1 < 50000) {
  //   res.send('item4')
  // } else if (num1 < 100000) {
  //   res.send('item5')
  // } else if (num2 < 500000) {
  //   res.send('item6')
  // } else{
  //   res.send('item7')
  // }

  var itemInfo = [
    {name: "item1", num1: 1000},
    {name: "item2", num1: 5000},
    {name: "item3", num1: 10000},
    {name: "item4", num1: 30000},
    {name: "item5", num1: 50000},
    {name: "item6", num1: 100000},
    {name: "item7", num1: 5000000}
  ];
  for(var i=0; i<itemInfo.length; i++){
      var itemInfo = itemInfo[i];
      if(price >= itemInfo.num1){
        responseItem = itemInfo.name;
      }else{
        break;
      }
  }
  res.send(responseItem);  


});



app.get('/itemInfo', function (req, res) {
  res.sendfile("itemInfo.html");

});

// server.listen(80, function(){
//   console.log(server.address().port + ' : is running');
// });

//http://pyrasis.com/nodejs/nodejs-HOWTO//참고사이트
