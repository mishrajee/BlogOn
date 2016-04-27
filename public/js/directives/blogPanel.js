angular.module('blogonApp').directive('blogPanel',['$location','CONSTANTS',function($location,CONSTANTS){
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
                $location.path(CONSTANTS.PATH.PROFILE+'/'+$scope.authorId)
            };

            $scope.navigateToBlog = function(){
                $location.path(CONSTANTS.PATH.BLOG_PAGE+'/'+$scope.id);
            };
        }
    }
}]);