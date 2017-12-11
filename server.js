var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./routes/config'); //读取配置文件config.js信息
var Menu = require('./models/menu')

var port = process.env.PORT || 3000; // 设置启动端口
var db=mongoose.connect(config.database); // 连接数据库
var apiRoutes = express.Router();

//用body parser 来解析post和url信息中的参数
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 使用 morgan 将请求日志打印到控制台
app.use(morgan('dev'));

// =======================
// 路由 ================
// =======================
// 基础路由

app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});
apiRoutes.get('/menu/get',function (req,res) {
    Menu.find({}, function(err, users) {
        res.json(users);
    });
})
// 插入数据
// app.get('/menu', function(req, res) {
//     var testSchema = new mongoose.Schema({
//         icon:{type:String},
//         text:{type:String},
//     })
//     var TestModal = db.model("test1",testSchema);
//     // 创建一个测试用户
//     var zhangguolong = new TestModal({
//         icon: 'zhangguolong',
//         text: '15',
//     });
//
//     // 将测试用户保存到数据库
//     zhangguolong.save(function(err) {
//         if (err) throw err;
//         console.log('User saved successfully');
//         res.json({ success: true });
//     });
// });
// API 路由 -------------------
// 待会儿再添加

// =======================
// 启动服务 ======
// =======================
app.use('/api', apiRoutes);
app.listen(port);
