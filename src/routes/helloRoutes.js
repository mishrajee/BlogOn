var express = require('express');
var helloRouter = express.Router();

var router = function(msg){
    var helloController = require('../controllers/helloController')(msg);
    console.log("hello route ...");
    helloRouter.route('/')
        .get(helloController.getMsg);

    return helloRouter;
};

module.exports = router;