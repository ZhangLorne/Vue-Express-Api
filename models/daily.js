var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('daily', new Schema({
    title:{type:String},
    body:{type:String},
    imgTit:{type:String},
}));