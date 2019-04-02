var express = require('express');
var api = require('./routes/api');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

// // 数据库连接
// var $mysql = require("mysql");
// //   这句话是，引入当前目录的mysql模板   mysql就是我们上面创建的mysql.js
// var sql = require("./mysql");
// //创建一个连接        mysql是我们上面文件暴露出来的模板的方法
// var $sql = $mysql.createConnection(sql.mysql)
// $sql.connect() //运用了这句才是真正连接


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', api);
app.use('/', index);
app.use('/users', users);

//--------------------- 数据库---------------
// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   database : 'exercise'
// });
 
// connection.connect();
 
// connection.query('SELECT * from exercise', function(err, data, fields) {
//   if (err) {
//     console.log(err);
//     return;
//   };
//   console.log(JSON.parse(JSON.stringify(data)));
// });
 
// connection.end();
// ------------------------------------------------------------

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;