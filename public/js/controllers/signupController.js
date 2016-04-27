angular.module('blogonApp').controller('signupController',['$scope','authFactory','$location','CONSTANTS',function($scope,authFactory,$location,CONSTANTS){
    $scope.userExist = false;
    $scope.passwordMisMatch = false;
    //redirect to home if already logged in
    $scope.submit = function(){
        if($scope.password !== $scope.confirmPassword){
            $scope.passwordMisMatch = true;
            return;
        }
        $scope.passwordMisMatch = false;

        var body = {
            username: $scope.username,
            password: $scope.password,
            name: $scope.name,
            gender: $scope.gender,
            occupation: $scope.occupation,
            about: $scope.about,
            doj: '2016-07-14T12:30:00'
        };

        authFactory.signup(body).then(function(resp){
            if(resp.id){
                $location.path(CONSTANTS.PATH.PROFILE +'/'+resp.id);
            } else{
                //signup failed
                $scope.userExist = true;
                $scope.username='';
            }
        });


    };



}]);