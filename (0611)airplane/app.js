var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app).listen(80);


var mysql = require('mysql');
//db 접속방법
var connection = mysql.createConnection({
  host: 'localhost'
  , port: 3306
  , user: 'root'
  , password: 'kopo'
  , database: 'test'
});


app.get('/', function (req,res){

  res.sendfile("home.html");
});

app.get('/flightInfo', function (req,res){

  res.sendfile("flight.html");
});
app.get('/aircraftInfo', function (req,res){

  res.sendfile("aircraft.html");
});
app.get('/getAircraftDb', function (req,res){
  connection.query('SELECT aircraftCode FROM aircraft;',
    function(err, rows, fields){
      if(err) throw err;

      res.send(rows)
    }
  )
});
app.get('/getMergeDb', function (req,res){
  connection.query('SELECT * FROM aircraft a, flight b where 1=1 and a.aircraftCode = b.aircraftCode;',
    function(err, rows, fields){
      if(err) throw err;

      res.send(rows)
    }
  )
});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb'}));

app.post('/flightInputDb', function (req,res){
  var aircraftCode = req.body.aircraftCode;
  var aircraftName = req.body.aircraftName;
  var seats = req.body.seats;
    var q = `INSERT INTO aircraft (aircraftCode, aircraftName, seats) VALUES ('${aircraftCode}','${aircraftName}','${seats}');`
    connection.query(q,
      function(err, rows, fields){
        if(err) throw err;
        res.send(rows);
      }
    );
  });
  app.post('/aircraftInputDb', function (req,res){
    var flightName = req.body.flightName;
    var aircraftCode = req.body.aircraftCode;
    var departure = req.body.departure;
    var arrival = req.body.arrival;
    var departTime = req.body.departTime;
    var arrivalTime = req.body.arrivalTime;

      var q = `INSERT INTO flight (flightName, aircraftCode, departure, arrival, departTime, arrivalTime) VALUES ('${flightName}','${aircraftCode}','${departure}','${arrival}','${departTime}','${arrivalTime}');`
      connection.query(q,
        function(err, rows, fields){
          if(err) throw err;
          res.send(rows);
        }
      );
    });
