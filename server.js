var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 9050;

var msg = "how do you do";

var helloRouter = require('./src/routes/helloRoutes')(msg);
var dataRouter = require('./src/routes/dataRoutes')();

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set('views','./src/views');
app.set('view engine', 'ejs');

//routes
app.use('/hello',helloRouter);
app.use('/data',dataRouter);

app.get('/',function(req,res){
    res.render('index');
});


app.listen(port,function(err){
    console.log('Running server on port '+port);
});

