var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.cookie('mycookie', 'test')
  res.render('pages/index');
  res.writeHead(200, "ok", {'Set-Cookie' : 'mycookie=test', 'Content-Type' : 'text/plain'})
});

app.get('/anemone', function(req, res) {
  res.cookie('mycookie', 'test')
  res.render('pages/anemone');
  res.writeHead(200, "ok", {'Set-Cookie' : 'mycookie=test', 'Content-Type' : 'text/plain'})
});

app.get('/iris', function(req, res) {
  res.cookie('mycookie', 'test')
  res.render('pages/iris');
  res.writeHead(200, "ok", {'Set-Cookie' : 'mycookie=test', 'Content-Type' : 'text/plain'})
});

app.get('/cyclamen', function(req, res) {
  res.cookie('mycookie', 'test')
  res.render('pages/cyclamen');
  res.writeHead(200, "ok", {'Set-Cookie' : 'mycookie=test', 'Content-Type' : 'text/plain'})
});

app.get('/rose', function(req, res) {
  res.cookie('mycookie', 'test')
  res.render('pages/rose');
  res.writeHead(200, "ok", {'Set-Cookie' : 'mycookie=test', 'Content-Type' : 'text/plain'})
});

app.get('/sunflower', function(req, res) {
  res.cookie('mycookie', 'test')
  res.render('pages/sunflower');
  res.writeHead(200, "ok", {'Set-Cookie' : 'mycookie=test', 'Content-Type' : 'text/plain'})
});

var port = 8080
app.listen(port);
console.log(`Example app listening at http://localhost:${port}`)