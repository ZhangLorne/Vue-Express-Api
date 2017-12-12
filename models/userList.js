var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 使用 module.exports 导出 User 模块
module.exports = mongoose.model('User', new Schema({
        date:{type:String},
        name:{type:String},
        address:{type:String},
}));