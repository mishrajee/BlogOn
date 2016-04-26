angular.module('blogonApp').controller('homeController',['$scope','$location','apiFactory','CONSTANTS',function($scope,$location,apiFactory,CONSTANTS){
    console.log("home controller.....");
    $scope.homeMessage = "home message";

    $scope.blogs =[];

    apiFactory.getAllBlogData().then(function(res){
        console.log("got data from factory");
        $scope.blogs = res;
    });


    $scope.submit = function(){
        $location.path(CONSTANTS.PATH.SEARCH+ '/'+$scope.queryString);
    };

}]);