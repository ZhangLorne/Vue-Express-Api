"use strict";
var express = require('express');
var User = require('../controller/user');
var Login = require('../controller/login');
var apiRoutes=express.Router();
apiRoutes.post('/save',User.addUser)
apiRoutes.post('/find',User.findUser)
apiRoutes.post('/remove',User.removeUser)
apiRoutes.post('/update',User.updateUser)
apiRoutes.post('/login',Login.login)
module.exports = apiRoutes