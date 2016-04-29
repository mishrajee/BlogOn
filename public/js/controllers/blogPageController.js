angular.module('blogonApp').controller('blogPageController',[
    '$scope','$location','$routeParams','apiFactory','CONSTANTS',
    function($scope,$location,$routeParams,apiFactory,CONSTANTS){
    var blogId = $routeParams.blogId;
    var profileId;
    apiFactory.getBlogById(blogId).then(function(data){
        $scope.blog = data._source;
        $scope.blog.id = data._id;
        profileId = $scope.blog.authorId;
    });

    $scope.navigateToAuthor = function(){
        $location.path(CONSTANTS.PATH.PROFILE+'/'+profileId);
    };


}]);