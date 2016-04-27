var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


var passportFun = function(app){
    app.use(passport.initialize());
    app.use(passport.session());

    //serialize user for the session
    passport.serializaUser(function(user,done){
        done(null,user.id);
    });

    //deserialize user from session
    passport.deserializaUser(function(user,done){
        done(null,user.id);
    });

    //use signup strategy for signup requests
    passport.use('local-signup',new LocalStrategy({
        usernameField: 'userName',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req,username,password,done){
        process.nextTick(function(){
            //find user in db
        });
    }));






};

module.exports = passportFun;