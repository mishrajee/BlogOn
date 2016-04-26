angular.module('blogonApp').controller('loginController',['$scope','$location','authFactory','CONSTANTS',function($scope,$location,authFactory,CONSTANTS){
    //redirect to home if already logged in

    $scope.submit = function(){
        var body = {
            userName: $scope.userName,
            password: $scope.password
        };

        authFactory.login(body).then(function(res){
            console.log(res);
        });
    };

    $scope.navigateToSignUp = function(){
        $location.path(CONSTANTS.PATH.SIGNUP);
    }
}]);