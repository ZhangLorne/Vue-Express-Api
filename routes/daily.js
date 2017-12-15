"use strict";
var express = require('express');
var daily = require('../controller/daily');
var apiRoutes=express.Router();
apiRoutes.post('/save',daily.DailySave)
apiRoutes.post('/find',daily.DailyFind)

module.exports = apiRoutes