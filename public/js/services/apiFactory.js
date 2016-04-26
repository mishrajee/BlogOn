angular.module('blogonApp').factory('apiFactory',['CONSTANTS','$http',function(CONSTANTS,$http){

    var getAllBlogData = function(){
        return $http({
            method: 'GET',
            url: CONSTANTS.API.GET_ALL_BLOGS
        }).then(function(res){
            console.log(res);
            return res.data;
        });
    };

    var searchBlog = function(query){
        return $http({
            method: 'GET',
            url: CONSTANTS.API.SEARCH+'/'+query
        }).then(function(res){
            console.log(res)
            return res.data;
        });
    };

    var getBlogById = function(id){
        return $http({
            method: 'GET',
            url: CONSTANTS.API.GET_BLOG_BY_ID+'/'+id
        }).then(function(res){
            console.log(res);
            return res.data;
        });
    };

    var getAuthor = function(id){
        return $http({
            method: 'GET',
            url: CONSTANTS.API.GET_AUTHOR+'/'+id
        }).then(function(res){
            console.log(res);
            return res.data;
        });
    };

    var submitBlog = function(body){
        return $http({
            method: 'POST',
            url: CONSTANTS.API.SUBMIT_BLOG,
            data: body
        }).then(function(res){
            console.log(res);
            return res.data;
        });
    };

    var getBlogsByProfileId = function(id){
        return $http({
            method: 'GET',
            url: CONSTANTS.API.GET_BLOG_BY_PROFILE_ID + '/' +id
        }).then(function(res){
            console.log(res);
            return res.data;
        });
    };




    return {
        getAllBlogData: getAllBlogData,
        searchBlog: searchBlog,
        getBlogById: getBlogById,
        getAuthor: getAuthor,
        submitBlog: submitBlog,
        getBlogsByProfileId: getBlogsByProfileId
    }
}]);