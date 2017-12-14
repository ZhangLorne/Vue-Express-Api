var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('admin', new Schema({
    password:{type:String},
    username:{type:String},
}));