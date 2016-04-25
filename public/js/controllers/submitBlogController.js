angular.module('blogonApp').controller('submitBlogController',['$scope',function($scope){
    $scope.isLoggedIn = true;
    var authorId = 20;

    $scope.submit = function(){
        var blog = {
            name: $scope.name,
            summary: $scope.summary,
            content: $scope.content,
            date: $scope.date,
            authorId: authorId
        };
        console.log(blog);
    }
}]);