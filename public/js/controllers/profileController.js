angular.module('blogonApp').controller('profileController',['$scope','$routeParams','apiFactory',function($scope,$routeParams,apiFactory){
    var profileId = $routeParams.profileId;

    apiFactory.getAuthor(profileId).then(function(data){
        $scope.profile = data;
        apiFactory.getBlogsByProfileId(profileId).then(function(res){
            $scope.blogs = res;
        });
    });

}]);