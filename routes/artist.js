var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('./../models');
var Artist = db.Artist;

router.use(bodyParser.json({ extended : false }));

router.get('/',function(req, res){
  Artist.findAll()
    .then(function(artists){
      return res.json(artists);
  });
});

router.post('/',function(req, res){
  Artist.create({
    name : req.body.name,
    type : req.body.type,
    facebook : req.body.facebook,
    instagram : req.body.instagram,
    twitter : req.body.twitter,
    bookingPhoneNumber : req.body.bookingPhoneNumber,
    bookingEmail : req.body.bookingEmail,
    description : req.body.description,
    visibility : false
  })
  .then(function(artist){
    return res.json(artist);
  });
});

router.get('/:id', function(req, res) {
  Artist.findOne({
    where: {
      id: encodeURI(req.params.id)
    }
  })
  .then(function(artist){
    return res.json(artist);
  });
});

router.put('/:id', function(req, res){
  Artist.update(
  {
    updatedAt : 'now()',
    name : req.body.name,
    type : req.body.type,
    facebook : req.body.facebook,
    instagram : req.body.instagram,
    twitter : req.body.twitter,
    bookingPhoneNumber : req.body.bookingPhoneNumber,
    bookingEmail : req.body.bookingEmail,
    description : req.body.description,
    visibility : req.body.visibility
  }, {
    where : {
      id : req.params.id
    }
  })
  .then(function(artist){
    return res.json(artist);
  });
});

router.delete('/:id', function(req, res){
  Artist.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(data){
    return res.json(data);
  });
});

module.exports = router;

