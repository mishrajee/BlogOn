angular.module('blogonApp').controller('submitBlogController',['$scope','apiFactory',function($scope,apiFactory){
    $scope.isLoggedIn = true;
    //get authorId and name from cookie
    var authorId = 20;
    var authorName = 'Chinmay'

    $scope.submit = function(){
        var blog = {
            name: $scope.name,
            summary: $scope.summary,
            content: $scope.content,
            date: $scope.date,
            authorId: authorId,
            authorName: authorName
        };
        apiFactory.submitBlog(blog).then(function(resp){
            console.log(resp);
        });

    }
}]);