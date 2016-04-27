angular.module('blogonApp').factory('commonUtilityFactory',[function(){
    var getCurrentDate = function(){
        var date = new Date();
        var yyyy = date.getFullYear();
        var mm = date.getMonth() +1;
        var dd = date.getDate();
        if(dd<10){
            dd = '0'+dd;
        }
        if(mm<10){
            mm = '0'+mm;
        }

        var today =  yyyy+'-'+mm+'-'+dd;

        return today;
    };

    return {
        getCurrentDate: getCurrentDate
    };
}]);