var elasticsearch = require('elasticsearch');

var CONSTANTS = require('../constants');

var esClient = new elasticsearch.Client({
    host: CONSTANTS.HOST
});

var service = function(){

    //search blogs with given author id field
    var searchBlogByProfileId = function(profileId){
        return esClient.search({
            index: CONSTANTS.INDEX,
            type: CONSTANTS.TYPE_BLOGS,
            body: {
                query : {
                    match: {
                        authorId: profileId
                    }
                }
            }
        }).then(function(resp){
            return resp.hits.hits;
        }, function(err){
            console.log("error in elastic call");
        });
    };

    //add document in blogs type with random id
    var addBlog = function(body){
        return esClient.index({
            index: CONSTANTS.INDEX,
            type: CONSTANTS.TYPE_BLOGS,
            body: body
        }).then(function(resp){
            return resp;
        }, function(err){
            console.log("error in es call");
        });
    };

    //return user document matched by id
    var getAuthorById= function(id){
        return esClient.get({
            index: CONSTANTS.INDEX,
            type: CONSTANTS.TYPE_USERS,
            id: id
        }).then(function(resp){
            return resp;
        }, function(err){
            console.log("error in elastic call");
        });
    };

    //return blog document matched by id
    var getBlogById = function(id){
        return esClient.get({
            index: CONSTANTS.INDEX,
            type: CONSTANTS.TYPE_BLOGS,
            id: id
        }).then(function(resp){
            return resp;
        }, function(err){
            console.log("error in elastic call");
        });
    };

    //search in blog name
    var searchBlogs = function(query){
        return esClient.search({
            index: CONSTANTS.INDEX,
            type: CONSTANTS.TYPE_BLOGS,
            body: {
                query : {
                    match: {
                        name: query
                    }
                }
            }
        }).then(function(resp){
            return resp.hits.hits;
        }, function(err){
            console.log("error in elastic call");
        });
    };

    //get all blogs in index, default count is 10
    var getAllBlogs = function(){
        return esClient.search({
            index: CONSTANTS.INDEX,
            type: CONSTANTS.TYPE_BLOGS,
            body: {
                query : {
                    match_all: {}
                }
            }
        }).then(function(resp){
            var hits = resp.hits.hits;
            return hits;
        }, function(err){
            console.log("error in elastic call");
        });

    };

    //check if user of a given username exist or not
    var isUserExist = function(userName){
        return esClient.search({
            index: CONSTANTS.INDEX,
            type: CONSTANTS.TYPE_USERS,
            body: {
                query: {
                    match :{
                        username: userName
                    }
                }
            }
        }).then(function(resp){
            var hits = resp.hits.hits;
            console.log(hits);
        }, function(err){
            console.log("Error in ES call");
        });

    };

    return {
        getAllBlogs: getAllBlogs,
        isUserExist: isUserExist,
        searchBlogs: searchBlogs,
        getBlogById: getBlogById,
        getAuthorById: getAuthorById,
        addBlog: addBlog,
        searchBlogByProfileId: searchBlogByProfileId
    };


};

module.exports = service;