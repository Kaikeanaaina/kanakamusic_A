var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var fs = require('fs');
var passport = require('passport');
var session = require('express-session');
var CONFIG = require('./config/config.json');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var userId;
var bcrypt = require('bcrypt');

var db = require('./models');
var Song = db.Song;
var Artist = db.Artist;
var Album = db.Album;
var RecordLabel = db.RecordLabel;
var User = db.User;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(flash());

app.use(session(CONFIG.SESSION));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser( function ( user, done ) {
  return done( null, user );
});

passport.deserializeUser( function ( user, done ) {
  return done( null, user );
});

app.get('/', function(req,res){
  Song.findAll()
    .then(function(songs){
      res.json(songs);
    });
});

app.use( methodOverride(function( req, res ) {
  if( req.body && typeof req.body === 'object' && '_method' in req.body ) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

//         this is for error access control error, if appears
app.all('/*', function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
 res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
 next();

});


app.use('/songs', require('./routes/song.js') );
app.use('/artists', require('./routes/artist.js'));
app.use('/albums', require('./routes/album.js'));
app.use('/recordLabels', require('./routes/recordLabel.js'));
app.use('/users', require('./routes/user.js'));




var server = app.listen(4000, function(){
  db.sequelize.sync();
  console.log('SERVER LISTENER CONNECTED TO : ', server.address() );
});