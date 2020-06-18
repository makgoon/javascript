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

  res.sendfile("syncresponse.html");
});

app.get('/changeinterval', function (req,res){

  res.sendfile("syncrequest.html");
});

app.get('/getdata', function (req,res){
  var q1 = 'SELECT syncvalue FROM sync;'
  var q2 = 'SELECT * FROM sync ORDER BY idx DESC LIMIT 1;'
  connection.query(q2,
    function(err, rows, fields){
      if(err) throw err;

      res.send(rows)
    }
  )
});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb'}));

app.post('/settext2', function (req,res){
  var synset = req.body.flightName;
  var q = `INSERT INTO sync (syncvalue) VALUES ('${syncvalue}');`
    connection.query(q,
      function(err, rows, fields){
        if(err) throw err;
        res.send(rows);
      }
    );
  });

app.put('/settext1', function (req,res){
  var syncset = req.body.syncset;
  connection.query(`UPDATE sync SET syncvalue = '${syncset}' WHERE 1=1;`,
    function(err, rows, fields){
      if(err) throw err;

      res.send(rows)
    }
  )
});
