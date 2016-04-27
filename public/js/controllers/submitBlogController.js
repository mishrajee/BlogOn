angular.module('blogonApp').controller('submitBlogController',['$scope','apiFactory','$cookies','CONSTANTS','$location',function($scope,apiFactory,$cookies,CONSTANTS,$location){

    if($cookies.get(CONSTANTS.COOKIES.KEY_IS_LOGGED_IN)==='true'){
        $scope.isLoggedIn = true;
    }else {
        $scope.isLoggedIn = false;
    }
    //get authorId and name from cookie
    var authorId = $cookies.get(CONSTANTS.COOKIES.USER_ID);
    var authorName = $cookies.get(CONSTANTS.COOKIES.USER_NAME);

    $scope.submit = function(){
        var blog = {
            name: $scope.name,
            summary: $scope.summary,
            content: $scope.content,
            date: $scope.date,
            authorId: authorId,
            authorName: authorName
        };
        apiFactory.submitBlog(blog).then(function(resp){
            if(resp._id){
                //blog added succesfully
                $location.path(CONSTANTS.PATH.BLOG_PAGE + '/'+resp._id);
            }
        });

    }
}]);