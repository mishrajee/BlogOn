angular.module('blogonApp').controller('loginController',['$scope','$location',function($scope,$location){
    //redirect to home if already logged in

    $scope.navigateToSignUp = function(){
        $location.path('/signup');
    }
}]);