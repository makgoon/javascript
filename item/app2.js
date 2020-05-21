var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app).listen(80);


app.get('/carInfo', function (req,res){

  var carReqName = req.query.str1;
  var colorReqName = req.query.str2;
  console.log(carReqName, colorReqName);

  var carPrice =
  //   {name:"베엠베", price: 2100},
  //   {name:"현대", price: 1300},
  //   {name:"토요타", price: 1500}
  // ];
  //
    {"bmw": 2100,
    "hyundai": 1300,
    "toyota": 1500}

  var colorPrice =
    {"red": 190,
    "green": 200,
    "black": 300}
res.send(`이 차의 가격은 ${carPrice[carReqName] + colorPrice[colorReqName]}`)


  // for(var i=0; i<carPrice.length; i++){
  //   if(carReqName == carPrice[i].name){
  //     responsePrice = carPrice[i].price;
  //
  //     carName = carPrice[i].name;
  //   }
  //   if(colorReqName == colorPrice[i].name){
  //     responseColor = colorPrice[i].price;
  //     colorName = colorPrice[i].name
  //   }
  // }
  // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", responsePrice, responseColor);
  var sumcarprice = responsePrice + responseColor

  res.send(`${carName}의 가격은 ${sumcarprice}, 색상은 ${colorName} 입니다`);

});



app.get('/select', function (req, res) {
  res.sendfile("select.html");

});

// server.listen(80, function(){
//   console.log(server.address().port + ' : is running');
// });

//http://pyrasis.com/nodejs/nodejs-HOWTO//참고사이트
