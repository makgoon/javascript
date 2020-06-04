var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
var mysql = require('mysql');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb'}));

var connection = mysql.createConnection({
	host: 'localhost'
	, port: 3306
	, user: 'root'
	, password: 'root'
	, database: 'test'
});


app.get('/', function (req, res) {
  res.sendfile("newsList.html");
});
app.get('/newsListPage', function (req, res) {
  res.sendfile("newsList.html");
});
app.get('/newsPostPage', function (req, res) {
  res.sendfile("newsPost.html");
});
app.get('/newsUpdatePage', function (req, res) {
  res.sendfile("newsUpdate.html");
});

app.get('/news', function (req, res) {
	if(req.query.no) {
		var q = `select * from news where no = ${req.query.no}`;
	  connection.query(q,
	    function (err, rows, fields) {
	      if (err) throw err;
	      res.send(rows);
	    }
	  );
	}
	else {
		var q = 'select * from news';
	  connection.query(q,
	    function (err, rows, fields) {
	      if (err) throw err;
	      res.send(rows);
	    }
	  );
	}
});

app.post('/news', function (req, res) {
	var title = req.body.title;
	var content = req.body.content;
	var q = `insert into news (title, content) values ("${title}", "${content}")`
  connection.query(q,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.put('/news', function (req, res) {
	var no = req.body.no;
	var title = req.body.title;
	var content = req.body.content;
	var q = `update news set title="${title}", content="${content}" where no = ${no}`
  connection.query(q,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.delete('/news', function (req, res) {
	var no = req.body.no;
	var q = `delete from news where no=${no}`;

  connection.query(q,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    }
  );
});
