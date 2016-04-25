angular.module('blogonApp').controller('mainController',['$scope','$mdDialog','$location',function($scope,$mdDialog,$location){
    console.log("hello from main controller");

    var originatorEv;
    $scope.openMenu = function($mdOpenMenu,ev){
        originatorEv = ev;
        $mdOpenMenu(ev);
    };

    $scope.navigateToUrl = function(path){
        $location.path(path);
    }



}]);