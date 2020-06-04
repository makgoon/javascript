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

  res.sendfile("newsList.html");
});

app.get('/newsList', function (req,res){

  res.sendfile("newsList.html");
});

app.get('/newswrite', function (req,res){

  res.sendfile("newswrite.html");
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


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb'}));


app.post('/newswritetoDB', function (req,res){
    var title = req.body.title;
    var content = req.body.content;
    var q = `INSERT INTO testtable (title, content) VALUES ('${title}','${content}');`
    connection.query(q,
      function(err, rows, fields){
        if(err) throw err;

        res.send(rows);
      }
    );
  });

app.delete('/newsdelete', function (req,res){
    var no = req.body.no;
    var q = `DELETE FROM testtable WHERE NO = ${no};`
    connection.query(q,
      function(err, rows, fields){
        if(err) throw err;
          res.send(rows);
      }
    );
  });
  app.get('/newsupdate', function (req,res){

    res.sendfile("newsupdate.html");
  });


app.put('/newsupdateaction', function (req,res){
    var no = req.body.no;
    var title = req.body.title;
    var content = req.body.content;
    var q = `UPDATE testtable SET TITLE = '${title}', CONTENT = '${content}' WHERE NO = ${no};`;
    connection.query(q,
      function(err, rows, fields){
        if(err) throw err;
          res.send(rows);
      }
    );
  });

  app.get('/newsupdateview', function (req,res){
    var no = req.query.no;
    var q = `select * from testtable WHERE NO = ${no};`;
      connection.query(q,
        function(err, rows, fields){
          if(err) throw err;
          res.send(rows)
        }
      )
  });
