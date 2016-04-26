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
            PROFILE: '/profile',
            SEARCH: '/search',
            SIGNUP: '/signup',
            SUBMIT_BLOG: '/submitBog',
            LOGIN: '/login',
            LOGOUT: '/logout'


        },
        AUTH: {
            LOGIN: '/auth/login',
            SIGNUP: '/auth/signup',
            USER_EXIST: '/auth/userExist'
        }
    };
})());