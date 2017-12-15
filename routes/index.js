"use strict";
var User=require('./user')
var daily=require('./daily')
module.exports = app =>{
    app.use('/user',User)
    app.use('/daily',daily)
}