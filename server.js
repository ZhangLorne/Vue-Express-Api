var express = require('express');  // 用来引入express模块
var app   = express();                 // express 实例对象
var toUSD = require('./routes/toUSD');
var foo = require('./routes/foo')
app.use(foo(req, res, next));
console.log(toUSD.toUSD(10))

app.set('port',process.env.PORT || 3000);
// 设置端口为3000

app.use(function (req, res, next) { console.log('Time:',
    Date.now()); next();});
app.use('/user/:id', function (req, res, next){
    console.log('Request Type:', req.method);
    next();});

app.get('/',function  (req,res) {          //  设置首页的路由 用 '/' 表示
    res.send('Ritsu Yan ')
})
app.get('/about',function  (req,res) {    //设置about页面的路由 用 '/about' 表示
    res.send('the node course')
})

app.use(function  (req,res,next) {         // 设置404页面
    res.status(404);
    res.send('404 - Not Found')
})
app.listen(app.get('port'),function  () {      // 监听端口如果有用户进入页面发送请求我们输出以下语句
    console.log('express started on port 3000')
})