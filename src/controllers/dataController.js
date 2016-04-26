var dataController = function(){
    var blogs = [{name:'sample A',id:'7887',summary:'this is smaple A',date:'30/02/2016',authorName: 'ABCS',authorId:'20'},
        {name:'sample B',id:'8879',summary:'this is smaple B',date:'31/02/2016',authorName: 'IOPS',authorId:'2'}];

    var blog = {name:'sample A',id:'7887',summary:'this is smaple A',date:'30/02/2016',authorName: 'ABCS',authorId:'20',content: 'this is the content of individual block'};

    var author = {name: 'ABCD',
        gender: 'male',
        occupation: 'working professional',
        about: 'abot the peson .... ',
        joiningDate: '56/09/2009'};

    var getAllBlogs = function(req,res){
        //search ES for blogs and return
        res.json(blogs);
    };

    var searchBlogs = function(req,res){
        var query = req.params.query;
        console.log("request receive for search query "+query);
        res.json(blogs);
    };

    var getBlogById = function(req,res){
        var id = req.params.id;
        console.log("request receive for blog id "+id);
        res.json(blog);
    };

    var getAuthor = function(req,res){
        var id = req.params.id;
        console.log("request received for author id "+id);
        res.json(author);
    };

    var submitBlog = function(req,res){
        //authenticate and put data in ES
        console.log(req.body);
        res.json(req.body);
    };

    var getBlogsByProfileId = function(req,res){
        var profileId = req.params.profileId;
        console.log("request received for blogs of profile id "+profileId);
        res.json(blogs);
    };

    return {
        getAllBlogs: getAllBlogs,
        searchBlogs: searchBlogs,
        getBlogById: getBlogById,
        getAuthor: getAuthor,
        submitBlog: submitBlog,
        getBlogsByProfileId: getBlogsByProfileId
    };
};

module.exports = dataController;