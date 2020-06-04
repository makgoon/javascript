+var express = require('express');
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


app.get('/newsListPage', function (req,res){
    res.sendfile("post.html");
  });


app.get('/news', function (req,res){
  var q = 'select * from testtable'
  connection.query(q,
    function(err, rows, fields){
      if(err) throw err;

      res.send(rows);
    }
  );
});

//post 사용시 반드시 사용해야하는 것
//get에서 썻던 query를 body로 모두 변환할것
//ajax의 type:'POST'로

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb'}));


app.post('/news', function (req,res){
    var q = `INSERT INTO testtable (title, content) VALUES ('postis','good');`
    connection.query(q,
      function(err, rows, fields){
        if(err) throw err;

        res.send(rows);
      }
    );
  });
