angular.module('blogonApp').controller('mainController',['$scope','$mdDialog','$location','CONSTANTS','$cookies',function($scope,$mdDialog,$location,CONSTANTS,$cookies){
    console.log("hello from main controller");

    $scope.profileId = $cookies.get(CONSTANTS.COOKIES.USER_ID);
    if($cookies.get(CONSTANTS.COOKIES.KEY_IS_LOGGED_IN)==='true'){
        $scope.isLoggedIn = true;
    }else{
        $scope.isLoggedIn = false;
    }

    $scope.menuItems = [
        {
            name: 'My Profile',
            path: CONSTANTS.PATH.PROFILE,
            showWhenLoggedIn: true
        },
        {
            name: 'Submit a Blog',
            path: CONSTANTS.PATH.SUBMIT_BLOG,
            showWhenLoggedIn: true
        },
        {
            name: 'Logout',
            path: CONSTANTS.PATH.LOGOUT,
            showWhenLoggedIn: true
        },
        {
            name: 'Login',
            path: CONSTANTS.PATH.LOGIN,
            showWhenLoggedIn: false
        },
        {
            name: 'New Account',
            path: CONSTANTS.PATH.SIGNUP,
            showWhenLoggedIn: false
        }
    ];

    $scope.menuClick = function(path){
        if(path === $scope.menuItems[0].path){
            path += '/' + $scope.profileId;
        }
        $location.path(path);

    };

    var originatorEv;
    $scope.openMenu = function($mdOpenMenu,ev){
        $scope.profileId = $cookies.get(CONSTANTS.COOKIES.USER_ID);
        if($cookies.get(CONSTANTS.COOKIES.KEY_IS_LOGGED_IN)==='true'){
            $scope.isLoggedIn = true;
        }else{
            $scope.isLoggedIn = false;
        }


        //check in cookies first
        originatorEv = ev;
        $mdOpenMenu(ev);
    };

    $scope.navigateToUrl = function(path){
        $location.path(path);
    }



}]);