var express = require('express');
var authRouter = express.Router();
var passport = require('passport');

var router = function(){
    authRouter.route('/signup')
        .post(function(req,res,next){
            passport.authenticate('local-signup',function(err,user){
                //handle error
                if(err){
                    //return 500
                    //next(err);
                }
                if(!user){
                    //singup failed as user already exist
                    //empty json means user exist
                    return res.json({});
                }else {
                    //user created
                    //user should be logged in by default
                    req.login(user._id,function(err){
                        if(err){
                            next(err);
                        }
                        console.log('signup by '+req.body.name);
                        return res.json({id: user._id, name: req.body.name});
                    });
                }
            })(req,res,next);
        });

    authRouter.route('/login')
        .post(function(req,res,next){
            passport.authenticate('local-login',function(err,user){
                if(!user){
                    //login failed
                    return res.json({});
                }else{
                    //login success
                    req.login(user.id,function(err){
                        if(err){
                            //error handling
                            return next(err);
                        }
                        console.log('signup by '+user.name);

                        return  res.json({id: user.id, name:user.name});

                    });

                }

            })(req,res,next);
        });

    authRouter.route('/logout')
        .get(function(req,res){
            console.log('logout by ',req.user);
            req.logout();
            res.json({success: true});
        });

    return authRouter;

};

module.exports = router;