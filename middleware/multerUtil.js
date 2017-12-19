var  multer=require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, file.originalname);
    }
});
//添加配置文件到muler对象。
var upload = multer({
    storage: storage
});

//var upload = multer({
//    storage: storage,
//    limits:{}
// });

//导出对象
module.exports = upload;