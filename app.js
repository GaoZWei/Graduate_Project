var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var api = require('./routes/api');
// var index = require('./routes/index');
var plan = require('./routes/plan');
var users = require('./routes/users');
var exercise = require('./routes/exercise');
var food = require('./routes/food');
var health = require('./routes/health');
var implement = require('./routes/implement');
var param = require('./routes/param');
var app = express();

// 模板引擎设置,没用
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
    res.send(200); //让options尝试请求快速结束
  else
    next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// 使用 session 中间件
app.use(session({
  name: 'session',
  secret: 'secret', // 对session id 相关的cookie 进行签名
  resave: true,
  saveUninitialized: false, // 是否保存未初始化的会话
  cookie: {
    maxAge: 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
  },
}));
app.use(function (req, res, next) {
  res.locals.session = req.session;
  // res.locals.user = req.session.user || {};
  next();
});
app.use(express.static(path.join(__dirname, 'public')));

// 中间件
app.use('/api', api);
// app.use('/', index);
app.use('/plan', plan);
app.use('/users', users);
app.use('/exercise', exercise);
app.use('/food', food);
app.use('/health', health);
app.use('/param', param);
app.use('/implement', implement);



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