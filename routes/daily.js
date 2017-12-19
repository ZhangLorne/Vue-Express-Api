"use strict";
var express = require('express');
var daily = require('../controller/daily');
var muilterUtil = require('../middleware/multerUtil');
var apiRoutes=express.Router();
apiRoutes.post('/save',muilterUtil.single('titleImg'),daily.DailySave)
apiRoutes.post('/find',daily.DailyFind)

module.exports = apiRoutes