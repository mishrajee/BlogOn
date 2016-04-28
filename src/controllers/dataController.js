var dataController = function(esService){

    var getAllBlogs = function(req,res){
        //search ES for blogs and return
        console.log("request received for all blog data");
        esService.getAllBlogs().then(function(data){
            res.json(data);
        });

    };

    var searchBlogs = function(req,res){
        var query = req.params.query;
        console.log("request receive for search query "+query);
        esService.searchBlogs(query).then(function(resp){
            res.json(resp);
        });
    };

    var getBlogById = function(req,res){
        var id = req.params.id;
        console.log("request receive for blog id "+id);
        esService.getBlogById(id).then(function(resp){
            res.json(resp);
        });
    };

    var getAuthor = function(req,res){
        var id = req.params.id;
        console.log("request received for author id "+id);
        esService.getAuthorById(id).then(function(resp){
            res.json(resp);
        });
    };

    var submitBlog = function(req,res){
        //authenticate and put data in ES
        if(!req.user){
            //not authorized to submit blog
            res.redirect('/');
        }
        var body = req.body;
        //author id should be taken from session object only
        body.authorId = req.user;

        esService.addBlog(body).then(function(resp){
            console.log(resp);
            res.json(resp);
        });
    };

    var getBlogsByProfileId = function(req,res){
        var profileId = req.params.profileId;
        console.log("request received for blogs of profile id "+profileId);
        esService.searchBlogByProfileId(profileId).then(function(resp){
            res.json(resp);
        });
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