angular.module('blogonApp').controller('blogPageController',['$scope','$location','$routeParams','apiFactory',function($scope,$location,$routeParams,apiFactory){
    var blogId = $routeParams.blogId;
    var profileId;
    apiFactory.getBlogById(blogId).then(function(data){
        $scope.blog = data;
        profileId = $scope.blog.authorId;
    });
    
    $scope.navigateToAuthor = function(){
        $location.path('/profile/'+profileId);
    };


}]);