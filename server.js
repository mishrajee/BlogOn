var express = require('express');

var app = express();

var port = process.env.PORT || 9050;

var msg = "how do you do";

var helloRouter = require('./src/routes/helloRoutes')(msg);

app.use(express.static('public'));
app.use(express.static('src/views'));

app.set('views','./src/views');
app.set('view engine', 'ejs');

//routes
app.use('/hello',helloRouter);

app.get('/',function(req,res){
    res.render('index');
});


app.listen(port,function(err){
    console.log('Running server on port '+port);
});

