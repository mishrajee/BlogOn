angular.module('blogonApp').constant('CONSTANTS',(function(){
    return {
        API: {
            GET_ALL_BLOGS: '/data/getAllBlogs',
            SEARCH: '/data/searchBlogs',
            GET_BLOG_BY_ID: '/data/getBlogById',
            GET_AUTHOR: '/data/getAuthor',
            SUBMIT_BLOG: '/data/submitBlog',
            GET_BLOG_BY_PROFILE_ID: '/data/getBlogsByProfileId'
        },
        PATH: {
            HOME: '/home',
            PROFILE: '/profile',
            SEARCH: '/search',
            SIGNUP: '/signup',
            SUBMIT_BLOG: '/submitBlog',
            LOGIN: '/login',
            LOGOUT: '/logout',
            BLOG_PAGE: '/blogPage'
        },
        AUTH: {
            LOGIN: '/auth/login',
            SIGNUP: '/auth/signup',
            USER_EXIST: '/auth/userExist',
            LOGOUT: '/auth/logout'
        },
        COOKIES: {
            KEY_IS_LOGGED_IN: 'is_logged_in',
            USER_ID: 'user_id',
            USER_NAME: 'user_name'
        }
    };
})());