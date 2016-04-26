angular.module('blogonApp').controller('searchController',['$scope','$routeParams','$location','apiFactory',function($scope,$routeParams,$location,apiFactory){
    $scope.query = $routeParams.searchQuery;

    apiFactory.searchBlog($scope.query).then(function(res){
        $scope.blogs = res;
    });


    $scope.submit = function(){
        $location.path('/search/'+$scope.query);
    };

}]);