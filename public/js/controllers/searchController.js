angular.module('blogonApp').controller('searchController',['$scope','$routeParams','$location','apiFactory','CONSTANTS',function($scope,$routeParams,$location,apiFactory,CONSTANTS){
    $scope.query = $routeParams.searchQuery;

    apiFactory.searchBlog($scope.query).then(function(res){
        $scope.blogs = res;
    });
    
    $scope.submit = function(){
        $location.path(CONSTANTS.PATH.SEARCH+ '/'+$scope.query);
    };

}]);