angular.module('blogonApp').controller('searchController',['$scope','$routeParams','$location',function($scope,$routeParams,$location){
    $scope.query = $routeParams.searchQuery;

    $scope.blogs = [{name:'sample A',id:'7887',summary:'this is smaple A',date:'30/02/2016',authorName: 'ABCS',authorId:'20'},
        {name:'sample B',id:'8879',summary:'this is smaple B',date:'31/02/2016',authorName: 'IOPS',authorId:'2'}];

    $scope.submit = function(){
        $location.path('/search/'+$scope.query);
    };

}]);