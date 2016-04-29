angular.module('blogonApp').controller('logoutController',[
    '$scope','$cookies','CONSTANTS','$location','authFactory',
    function($scope,$cookies,CONSTANTS,$location,authFactory){
    $scope.showLoggedOut = false;

    $cookies.put(CONSTANTS.COOKIES.KEY_IS_LOGGED_IN,false);
    $cookies.put(CONSTANTS.COOKIES.USER_ID,'');
    $cookies.put(CONSTANTS.COOKIES.USER_NAME,'');
    //send request to server to log out
    //then show logged out message
    authFactory.logout().then(function(resp){
        console.log(resp);
        if(resp.success){
            //logout successfull
            $scope.showLoggedOut = true;
        }
    });

    $scope.navigateToLogin = function(){
        $location.path(CONSTANTS.PATH.LOGIN);
    };

    $scope.navigateToHome = function(){
        $location.path(CONSTANTS.PATH.HOME);
    };

}]);