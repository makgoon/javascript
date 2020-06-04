var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app).listen(80);
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost'
  , port: 3306
  , user: 'root'
  , password: 'kopo'
  , database: 'test'
});

app.get('/', function (req,res){

  res.sendfile("main.html");
});

app.get('/newsget', function (req,res){
  var q = `select * from testtable`;
    connection.query(q,
      function(err, rows, fields){
        if(err) throw err;
        res.send(rows)
      }
    )
});

app.get('/newswritetoDB', function (req,res){
  var q = `select * from testtable`;
    connection.query(q,
      function(err, rows, fields){
        if(err) throw err;
        res.send(rows)
      }
    )
});
