var helloController = function(msg){
    var getMsg = function(req,res){
        console.log("hello controller........   ");
        res.render('hello',{msg:'kkokoko'});
    };

    return {
        getMsg: getMsg
    };
};

module.exports = helloController;