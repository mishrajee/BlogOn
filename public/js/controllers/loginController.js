angular.module('blogonApp').controller('loginController',[
    '$scope','$location','authFactory','CONSTANTS','$cookies',
    function($scope,$location,authFactory,CONSTANTS,$cookies){
    //redirect to home if already logged in
    if($cookies.get(CONSTANTS.COOKIES.KEY_IS_LOGGED_IN)==='true'){
        //user is logged in, redirect to home
        $location.path(CONSTANTS.PATH.HOME);
    }
    $scope.loginFailed = false;

    $scope.submit = function(){
        var body = {
            username: $scope.userName,
            password: $scope.password
        };

        authFactory.login(body).then(function(res){
            if(res.id){
                //login success
                //set cookies
                $cookies.put(CONSTANTS.COOKIES.KEY_IS_LOGGED_IN,true);
                $cookies.put(CONSTANTS.COOKIES.USER_ID,res.id);
                $cookies.put(CONSTANTS.COOKIES.USER_NAME,res.name);

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