angular.module('blogonApp').directive('blogPanel',function(){
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
        }
    }
});