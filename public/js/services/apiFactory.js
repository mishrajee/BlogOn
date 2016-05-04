angular.module('blogonApp').factory('apiFactory',['CONSTANTS','$http',function(CONSTANTS,$http){

    //generic http get call to ES endpoint input url and returns response.data
    var httpGetCall = function(url){
        return $http({
            method: 'GET',
            url: url
        }).then(function(res){
            return res.data;
        });
    };

    //generic post call to call to ES endpoint with input url with input body and return response
    var httpPostCall = function(url,body){
        return $http({
            method: 'POST',
            url: url,
            data: body
        }).then(function(res){
            return res.data;
        });
    };

    var getAllBlogData = function(){
        return httpGetCall(CONSTANTS.API.GET_ALL_BLOGS);
    };

    var searchBlog = function(query){
        return httpGetCall(CONSTANTS.API.SEARCH+'/'+query);
    };

    var getBlogById = function(id){
        return httpGetCall(CONSTANTS.API.GET_BLOG_BY_ID+'/'+id);
    };

    var getAuthor = function(id){
        return httpGetCall(CONSTANTS.API.GET_AUTHOR+'/'+id);
    };

    var submitBlog = function(body){
        return httpPostCall(CONSTANTS.API.SUBMIT_BLOG, body);
    };

    var getBlogsByProfileId = function(id){
        return httpGetCall(CONSTANTS.API.GET_BLOG_BY_PROFILE_ID + '/' +id);
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