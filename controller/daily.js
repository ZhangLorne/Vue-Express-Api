var DailyModel = require('../models/daily');
var fs=require('fs');
var http=require('http')
class Daily {
    constructor(){

    }
    DailySave(req,res,next){
        if(req.body.title==undefined){
            res.json({success:false});
        }else{
            DailyModel.create(req.body,function (err, daily) {
                if (err) throw err;
                res.json({success:true});
            })
        }
    }
    DailyFind(req,res,next){
        DailyModel.find({},function (err,daily) {
            res.json(daily);
        })
    }
}
module.exports = new Daily()