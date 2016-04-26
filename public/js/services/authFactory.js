angular.module('blogonApp').factory('authFactory',['CONSTANTS','$http',function(CONSTANTS,$http){
    var login = function(body){
        return $http({
            method: 'POST',
            url: CONSTANTS.AUTH.LOGIN,
            data: body
        }).then(function(res){
            //see if response is ok
            return res.data;
        });
    };

    var signup = function(body){
        return $http({
            method: 'POST',
            url: CONSTANTS.AUTH.SIGNUP,
            data: body
        }).then(function(res){
            //see if response is ok
            return res.data;
        });
    };

    return {
        login: login,
        signup: signup
    };

}]);