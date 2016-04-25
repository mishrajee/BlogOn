angular.module('blogonApp',['ngRoute','ngMaterial']);

angular.module('blogonApp').config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl: '/home.ejs',
            controller: 'homeController'
        })
        .when('/search/:searchQuery',{
            templateUrl: 'search.ejs',
            controller: 'searchController'
        })
        .when('/profile/:profileId',{
            templateUrl: 'profile.ejs',
            controller: 'profileController'
        })
        .when('/profileEdit/:profileId',{
            templateUrl: 'profileEdit.ejs',
            controller: 'profileEditController'
        })
        .when('/submitBlog',{
            templateUrl: 'submitBlog.ejs',
            controller: 'submitBlogController'
        })
        .when('/blogPage/:blogId',{
            templateUrl: 'blogPage.ejs',
            controller: 'blogPageController'
        });
}]);