angular.module('blogonApp').controller('homeController',[
    '$scope','$location','apiFactory','CONSTANTS',
    function($scope,$location,apiFactory,CONSTANTS){
    $scope.blogs= [];

    apiFactory.getAllBlogData().then(function(res){
        $scope.blogs= [];
        for(var data in res){
            var blog = res[data]._source;
            blog.id = res[data]._id;
            $scope.blogs.push(blog);
        };
    });


    $scope.submit = function(){
        $location.path(CONSTANTS.PATH.SEARCH+ '/'+$scope.queryString);
    };

}]);