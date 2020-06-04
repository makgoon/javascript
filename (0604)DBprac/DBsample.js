//myspl에 접속하기 위한 변수 선언,
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app).listen(80);
var mysql = require('mysql');
//db 접속방법 서버의 정보를 담는 부분
var connection = mysql.createConnection({
  host: 'localhost'
  , port: 3306
  , user: 'root'
  , password: 'kopo'
  , database: 'test'
});
//get 함수 콜 부분
app.get('/newsListPage', function (req,res){
  //app.get을 통해서 /newsListPage에 대한 response를 아래와 같이 호출함
    res.sendfile("post.html");
    //html file을 호출할때는 sendfile, 변수를 보낼때는 그냥 send
  });


app.get('/news', function (req,res){
  var q = 'select * from testtable'
  //sql문 작성시에는 변수로 담아서 쏘기, 담아야 수정이 편함
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

//post는 insert를 호출할때 사용함
app.post('/news', function (req,res){
    var q = `INSERT INTO testtable (title, content) VALUES ('postis','good');`
    connection.query(q,
      function(err, rows, fields){
        if(err) throw err;
        res.send(rows);
      }
    );
  });
