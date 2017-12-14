var UserModel = require('../models/userList');
class User {
    constructor(){

    }
    findUser(req,res,next){
        UserModel.find({},function (err, users) {
            users.success=true;
            res.json(users);
        })
    }
    addUser(req,res,next){
        UserModel.create(req.body,function (err, users) {
            if (err) throw err;
            res.json({success:true});
        })
    }
    removeUser(req,res,next){
        var conditions = {_id:req.body.id};
        UserModel.remove(conditions, function (error) {
            if (error) {
                console.error(error);
            } else {
                console.error("用户删除成功")
            }
        });
    }
    updateUser(req,res,next){
        var conditions = req.body.id;
        var updates = req.body;
        UserModel.update(conditions, updates,function (error) {
            if (error) {
                console.error(error);
            } else {
                console.error("更新用户名成功")
            }
        });
    }
}
module.exports = new User()