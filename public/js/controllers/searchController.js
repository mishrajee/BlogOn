angular.module('blogonApp').controller('searchController',[
    '$scope','$routeParams','$location','apiFactory','CONSTANTS',
    function($scope,$routeParams,$location,apiFactory,CONSTANTS){
    $scope.query = $routeParams.searchQuery;

    apiFactory.searchBlog($scope.query).then(function(res){
        $scope.blogs = [];
        for(var i=0;i<res.length;i++){
            var blog = res[i]._source;
            blog.id = res[i]._id;
            $scope.blogs.push(blog);
        }
    });

    $scope.submit = function(){
        $location.path(CONSTANTS.PATH.SEARCH+ '/'+$scope.query);
    };

}]);