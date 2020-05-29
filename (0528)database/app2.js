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
    res.send("뉴스 홈");
  });


app.get('/test', function (req,res){
  connection.query('select * from testtable',
    function(err, rows, fields){
      if(err) throw err;

      res.send(rows)
    }
  )

      // res.send(myArray)


});


  app.get('/newListPage', function (req,res){
      res.sendfile("newsList.html");
    });

  app.get('/selectFromServer', function (req,res){

    connection.query('select * from testtable',
      function(err, rows, fields){
        if(err) throw err;
        // console.log(rows[0])
        for(var i = 0; i < rows.length; i++) {
          var data = rows[i]
          console.log(data.no, data.title, data.content);
          // console.log(rows[i].no, rows[i].name);
        }
        res.send(rows)
      }
  )

  });
