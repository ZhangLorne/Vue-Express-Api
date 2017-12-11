var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var mongoose =require('mongoose');
var app = express();
app.set('api', path.join(__dirname, 'api'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});
var db=mongoose.connect('mongodb://localhost/test');
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("——数据库连接成功！——");
});
var testSchema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number,default:0},
    email:{type:String},
    time:{type:Date,default:Date.now},
})
var TestModal = db.model("test1",testSchema);
var TestInfo = new TestModal({
    name:"zhang",
    age:22,
    email:'long642977312@qq.com',
})
TestInfo.save(function (err,doc) {
    if(err){
      console.log("error:"+err);
    }else{
      console.log(doc);
    }
})
module.exports = app;
