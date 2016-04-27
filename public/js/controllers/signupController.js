angular.module('blogonApp').controller('signupController',['$scope','authFactory',function($scope,authFactory){

    //redirect to home if already logged in
    $scope.submit = function(){
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
            console.log(resp);
        });


    };



}]);