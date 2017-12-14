var AdminModel = require('../models/adminList');
class Login {
    constructor(){

    }
    login(req,res,next){
        AdminModel.findOne({username: req.body.username },function (err,user) {
            if(user==null){
                res.json({success:true,msg:"没有此用户",errcode:-1});
            }else if(user.password==req.body.password){
                res.json({success:true,msg:"登陆成功",errcode:0});
            }else{
                res.json({success:true,msg:"密码错误",errcode:-1});
            }
        })
    }
}
module.exports = new Login()