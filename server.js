var routes = require('./routes/index');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./routes/config'); //读取配置文件config.js信息
var port = process.env.PORT || 3000; // 设置启动端口
var db=mongoose.connect(config.database); // 连接数据库
//用body parser 来解析post和url信息中的参数
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// 使用 morgan 将请求日志打印到控制台
app.use(morgan('dev'));

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true); //可以带cookies
    res.header("X-Powered-By", '3.2.1')
    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});
routes(app);
app.listen(port);
