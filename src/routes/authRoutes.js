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
                    return res.json({id: user._id});
                }
            })(req,res,next);
        });

    return authRouter;

};

module.exports = router;