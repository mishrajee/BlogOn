angular.module('blogonApp',['ngRoute','ngMaterial','ngCookies'])
    .config(function($mdThemingProvider){
        //config palette to match with application theme
        //extend original indigo palette change the color that will be used
        var appThemeMap = $mdThemingProvider.extendPalette('indigo', {
            '500': '#62B6D6',
            'contrastDefaultColor': 'dark'
        });

        //define extended palette as new
        $mdThemingProvider.definePalette('appTheme', appThemeMap);

        //use new palette
        $mdThemingProvider.theme('default')
            .primaryPalette('appTheme');

    });

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
        })
        .when('/signup',{
            templateUrl: 'signup.ejs',
            controller: 'signupController'
        })
        .when('/login',{
            templateUrl: 'login.ejs',
            controller: 'loginController'
        })
        .when('/logout',{
            templateUrl: 'logout.ejs',
            controller: 'logoutController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);