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

app.get('/test', function (req,res){

  res.send("test");
});
app.get('/select', function (req,res){

  res.sendfile("view.html");
});
app.get('/selectFromServer', function (req,res){

  connection.query('select * from testtable',
    function(err, rows, fields){
      if(err) throw err;
      // console.log(rows[0])
      for(var i = 0; i < rows.length; i++) {
        var data = rows[i]
        console.log(data.no, data.name);
        // console.log(rows[i].no, rows[i].name);
      }
      res.send(rows)
    }
)

});

app.get('/updateToServer', function (req,res){
    //req.query.() 괄호안은 key 값, 이렇게 쓰면 value를 호출받음
    var no = req.query.no;
    var name = req.query.name;

    //홑따옴표 반드시 써야함
    connection.query(`update testtable set name = '${name}' where no = '${no}';`,
    function(err, rows, fields){
      if(err) throw err;
    }

    )
    //실시간으로 변경된 값 확인하기
    connection.query(`select * from testtable`,
    function(err, rows, fields){

      if(err) throw err;
      res.send(rows)
    }

    )

});

//지우기 함수
app.get('/delectFromServer', function (req,res){
    //req.query.() 괄호안은 key 값, 이렇게 쓰면 value를 호출받음
    var no = req.query.no;
    var cal = req.query.cal;
    //홑따옴표 반드시 써야함
    connection.query(`delete from testtable where no ${cal} '${no}';`,
    function(err, rows, fields){
      if(err) throw err;
    }

    )
    //실시간으로 변경된 값 확인하기
    connection.query(`select * from testtable`,
    function(err, rows, fields){

      if(err) throw err;
      res.send(rows)
    }

    )

});
