angular.module('blogonApp').controller('profileController',[
    '$scope','$routeParams','apiFactory',
    function($scope,$routeParams,apiFactory){
    var profileId = $routeParams.profileId;

    apiFactory.getAuthor(profileId).then(function(data){
        $scope.profile = data._source;
        $scope.profile.id = data._id;
        apiFactory.getBlogsByProfileId(profileId).then(function(res){
            $scope.blogs = [];
            for(var i=0;i<res.length;i++){
                var blog = res[i]._source;
                blog.id = res[i]._id;
                $scope.blogs.push(blog);
            };
        });
    });

}]);