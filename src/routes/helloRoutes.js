var express = require('express');
var helloRouter = express.Router();

var router = function(msg){
    var helloController = require('../controllers/helloController')(msg);

    helloRouter.route('/')
        .get(helloController.getMsg);

    return helloRouter;
};

module.exports = router;