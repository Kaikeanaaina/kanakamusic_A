var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('./../models');
var BandMember = db.BandMember;

router.use(bodyParser.json({ extended : false}));

module.exports = router;
