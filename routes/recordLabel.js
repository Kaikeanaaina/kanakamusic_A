var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('./../models');
var RecordLabel = db.RecordLabel;


router.use(bodyParser.json({ extended : false }));

router.get('/',function(req, res){
  RecordLabel.findAll()
  .then(function(recordLabels){
    return res.json(recordLabels);
  });
});

router.post('/',function(req, res){
  RecordLabel.create({
    name : req.body.name
  })
  .then(function(recordLabel){
    return res.json(recordLabel);
  });
});

router.get('/:id', function(req, res) {
  RecordLabel.findOne({
    where: {
      id: encodeURI(req.params.id)
    }
  })
  .then(function(recordLabel){
    return res.json(recordLabel);
  });
});

router.put('/:id', function(req, res){
  RecordLabel.update(
  {
    updatedAt : 'now()',
    name : req.body.name,
  }, {
    where : {
      id : req.params.id
    }
  })
  .then(function(recordLabel){
    return res.json(recordLabel);
  });
});

router.delete('/:id', function(req, res){
  RecordLabel.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(data){
    return res.json(data);
  });
});


module.exports = router;