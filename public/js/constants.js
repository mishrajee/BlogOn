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

        }
    }
})());