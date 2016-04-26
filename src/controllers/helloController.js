var helloController = function(msg){
    var getMsg = function(req,res){
        console.log("hello controller........   ");
        res.json({'name':'abcd'});
    };

    return {
        getMsg: getMsg
    };
};

module.exports = helloController;