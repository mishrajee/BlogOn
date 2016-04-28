var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var esService = require('../services/elasticQueryService')();


var passportFun = function(app){
    app.use(passport.initialize());
    app.use(passport.session());

    //serialize user for the session
    passport.serializeUser(function(user,done){
        done(null,user);
    });

    //deserialize user from session
    passport.deserializeUser(function(user,done){
        done(null,user);
    });

    //use signup strategy for signup requests
    passport.use('local-signup',new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req,username,password,done){
        process.nextTick(function(){

            //find user in ES
            esService.isUserExist(username).then(function(exist){
                if(exist){
                    return done(null,false);
                }else {
                    //push user in elasticsearch
                    var user = {
                        username: username,
                        password: password,
                        doj: req.body.doj,
                        about: req.body.about,
                        occupation: req.body.occupation,
                        name: req.body.name
                    };
                    esService.addUser(user).then(function(resp){
                        //user is added in the db, return resp so that id can be fetched to store in session
                        return done(null,resp);
                    });
                }
            });


        });
    }));

    //strategy for local login
    passport.use('local-login', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true

    }, function(req,username,password,done){
        // find user and match with password in db
        esService.matchPassword(username,password).then(function(resp){
            if(resp.length>0){
                //login success
                var user = {id: resp[0]._id, name: resp[0]._source.name};
                return done(null,user);
            }else {
                //login failed
                return done(null,false);
            }
        });


    }));






};

module.exports = passportFun;