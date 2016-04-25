angular.module('blogonApp').controller('blogPageController',['$scope','$location','$routeParams',function($scope,$location,$routeParams){
    var blogId = $routeParams.blogId;

    var profileId = '20';

    $scope.blog = {name:'sample A',id:'7887',summary:'this is smaple A',date:'30/02/2016',authorName: 'ABCS',authorId:'20',content:'This is the content of this material'};

    $scope.navigateToAuthor = function(){
        $location.path('/profile/'+profileId);
    };


}]);