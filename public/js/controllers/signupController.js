angular.module('blogonApp').controller('signupController',[
    '$scope','authFactory','$location','CONSTANTS','commonUtilityFactory','$cookies',
    function($scope,authFactory,$location,CONSTANTS,commonUtilityFactory,$cookies){
    $scope.userExist = false;
    $scope.passwordMisMatch = false;
    //redirect to home if already logged in
    $scope.submit = function(){
        if($scope.password !== $scope.confirmPassword){
            $scope.passwordMisMatch = true;
            return;
        }
        $scope.passwordMisMatch = false;

        var doj = commonUtilityFactory.getCurrentDate();

        var body = {
            username: $scope.username,
            password: $scope.password,
            name: $scope.name,
            gender: $scope.gender,
            occupation: $scope.occupation,
            about: $scope.about,
            doj: doj
        };

        authFactory.signup(body).then(function(resp){
            if(resp.id){
                //add login info in cookie
                $cookies.put(CONSTANTS.COOKIES.KEY_IS_LOGGED_IN,true);
                $cookies.put(CONSTANTS.COOKIES.USER_ID,resp.id);
                $cookies.put(CONSTANTS.COOKIES.USER_NAME,resp.name);
                $location.path(CONSTANTS.PATH.PROFILE +'/'+resp.id);
            } else{
                //signup failed
                $scope.userExist = true;
                $scope.username='';
            }
        });


    };



}]);