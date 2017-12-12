"use strict";
var express = require('express');
var User = require('../controller/user');

var apiRoutes=express.Router();
apiRoutes.post('/save',User.addUser)
apiRoutes.post('/find',User.findUser)

module.exports = apiRoutes