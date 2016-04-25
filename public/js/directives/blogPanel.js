angular.module('blogonApp').directive('blogPanel',['$location',function($location){
    return{
        restrict: 'E',
        transclude: true,
        templateUrl: 'blogPanel.ejs',
        scope: {
            name: '@',
            id: '@',
            summary: '@',
            date: '@',
            authorName: '@',
            authorId: '@'
        },
        controller: function($scope){
            $scope.navigateToAuthor = function(){
                console.log("navigate to author");
                $location.path('/profile/:'+$scope.authorId)
            };

            $scope.navigateToBlog = function(){
                $location.path('/blogPage/:'+$scope.id);
            };
        }
    }
}]);