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
}
module.exports = new User()