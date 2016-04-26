var express = require('express');
var dataRouter = express.Router();

var router = function(){
    var dataController = require('../controllers/dataController')();

    dataRouter.route('/getAllBlogs')
        .get(dataController.getAllBlogs);

    dataRouter.route('/searchBlogs/:query')
        .get(dataController.searchBlogs);

    dataRouter.route('/getBlogById/:id')
        .get(dataController.getBlogById);

    dataRouter.route('/getAuthor/:id')
        .get(dataController.getAuthor);

    dataRouter.route('/submitBlog')
        .post(dataController.submitBlog);

    dataRouter.route('/getBlogsByProfileId/:profileId')
        .get(dataController.getBlogsByProfileId);

    return dataRouter;
};

module.exports = router;