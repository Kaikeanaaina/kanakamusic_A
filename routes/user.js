var express = require('express');
var app = express();
var router = express.Router();
var db = require('./../models');
var User = db.User;
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
// var CONFIG = require('./config.js');

var auth = function(req, res, next){
  if (!req.isAuthenticated()) {
    res.send(401);
  } else {
    next();
  }
};

router.use(bodyParser.json({ extended: false }));
router.use(cookieParser());

// **************** once this is on, it crashes because the CONFIG is wrong
// // add optional secret key to our session
// app.use(session(CONFIG.SESSION));

//initiallize passport project in Express
app.use(passport.initialize());

//set passport session middleware to persist login sessions
app.use(passport.session());

//in order to maintain persistent log in session,
//the authentication user must be serialized to the session.
//The user will be deserialized when each subsequent request is made.
passport.serializeUser(function(user, done) {
  //user is passed in from Local Strategy
  //user is attached to req.user
  return done(null, user);
});
passport.deserializeUser(function(user, done) {
  return done(null, user);
});


passport.use(new LocalStrategy({
    passReqToCallback: true
  },
  function(req, username, password, done){
    var user = null;

    User.findOne({
        where:{
          email : username
        }
    })
    .then(function(data){
      user = data;
      if(!user){
        return done(new Error('User not found.'), false);
      }
      bcrypt.compare(password, user.password, function(err, matches){
        // if err...;
        if(matches === false){
          // this is when passwords dont match
          return done(new Error('Invalid Password'));
        }
        if(matches === true){
          return done(null, user);
        }
      });
    });
  }
));

function authenticate(username,password){
  var CREDENTIALS = User.CREDENTIALS;
  var USERNAME = CREDENTIALS.USERNAME;
  var PASSWORD = CREDENTIALS.PASSWORD;

  console.log('alohalohalohalohalohalohalohalohalohalohalohaloha', CREDENTIALS, USERNAME, PASSWORD);


  return (username === USERNAME && password === PASSWORD);
}

function isAuthenticated(req,res,next){
  if(!req.isAuthenticated()){
    return res.redirect('/login');
  }
  return next();
}


router.post('/login', passport.authenticate('local', {
                                                    failureFlash: 'Invalid username or password.',
                                                    successFlash: 'Welcome!' }), function(req, res){
  return res.json(req.user.dataValues);
});

router.post('/register',function(req,res){
  User.findOne({
    where:{
      email: req.body.userEmail
    }
  })
  .then(function(data){

    if(data===null){
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(req.body.userPassword, salt);
      User.create({
        email : req.body.userEmail,
        password : hash,
        type : "user"
      })
      .then( function ( user ) {
        return res.json( user );
      });
    }
    else{
      //if someone exists by that username
        //we want to go back to register
          //and let them know that username already exists
          //can't register that username
      return res.json( new Error('username already exists'));
    }

  });
});


router.route( '/loggedIn', function ( req, res ) {
  res.send( req.isAuthenticated() ? req.user : '0' );
});


router.get('/logout', function(req, res){
  req.logout();
  return res.json();

});



module.exports = router;