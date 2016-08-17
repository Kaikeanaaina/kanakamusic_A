var express = require('express');
var app = express();
var router = express.Router();
var db = require('./../models');
var TheDate = db.TheDate;
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');



router.use(bodyParser.json({ extended: false }));
router.use(cookieParser());

router.get('/',function(req, res){
  TheDate.findAll({
    where : {
      id : 1
    }
  })
  .then(function(date){
    return res.json(date);
  });
});

router.post('/',function(req, res){
  TheDate.create({
    dayOutOfTheMonth : 0,
    dayOutOfTheWeek : 0
  })
  .then(function(date){
    return res.json(date);
  });
});

router.put('/weekly', function(req, res){
  TheDate.update(
  {
    dayOutOfTheWeek : req.body.dayOutOfTheWeek
  }, {
    where : {
      id : 1
    }
  })
  .then(function(album){
    return res.json(album);
  });
});

router.put('/monthly', function(req, res){
  TheDate.update(
  {
    dayOutOfTheMonthly : req.body.dayOutOfTheMonthly
  }, {
    where : {
      id : 1
    }
  })
  .then(function(album){
    return res.json(album);
  });
});


module.exports = router;