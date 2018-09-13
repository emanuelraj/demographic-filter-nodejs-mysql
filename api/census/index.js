'use strict';
const express = require('express');
const controller = require('./census.controller');
const router = express.Router();


router.get('/', controller.index);
router.get('/demographics/', controller.getDemographicItems);

module.exports = router;