angular.module('blogonApp').controller('profileController',['$scope','$routeParams',function($scope,$routeParams){
    var profileId = $routeParams.profileId;

    $scope.profile = {
        name: 'ABCD',
        gender: 'male',
        occupation: 'working professional',
        about: 'abot the peson .... ',
        joiningDate: '56/09/2009'
    };

    $scope.blogs = [
        {name:'sample A',id:'7887',summary:'this is smaple A',date:'30/02/2016',authorName: 'ABCS',authorId:'20'}
    ];


}]);