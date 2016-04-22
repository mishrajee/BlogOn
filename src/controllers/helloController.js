var helloController = function(msg){
    var getMsg = function(req,res){
        res.render('hello',{msg:msg});
    };

    return {
        getMsg: getMsg
    };
};

module.exports = helloController;