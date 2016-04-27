angular.module('blogonApp').controller('loginController',['$scope','$location','authFactory','CONSTANTS',function($scope,$location,authFactory,CONSTANTS){
    //redirect to home if already logged in
    $scope.loginFailed = false;

    $scope.submit = function(){
        var body = {
            username: $scope.userName,
            password: $scope.password
        };

        authFactory.login(body).then(function(res){
            if(res.id){
                //login success
                $location.path(CONSTANTS.PATH.PROFILE + '/' + res.id);
            }else {
                //login failed
                $scope.loginFailed = true;
                $scope.userName = '';
                $scope.password = '';
            }
        });
    };

    $scope.navigateToSignUp = function(){
        $location.path(CONSTANTS.PATH.SIGNUP);
    }
}]);