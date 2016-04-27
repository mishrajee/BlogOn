var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

var app = express();

var port = process.env.PORT || 9050;

var dataRouter = require('./src/routes/dataRoutes')();
var authRouter = require('./src/routes/authRoutes')();

app.use(express.static('public'));
app.use(express.static('src/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser('thisismysecretblogkey'));
app.use(session({secret: 'thisismysecretblogkey'}));
//passport related code
require('./src/config/passport')(app);

app.set('views','./src/views');
//using ejs templating engine
app.set('view engine', 'ejs');

//routes
app.use('/data',dataRouter);
app.use('/auth',authRouter);

app.get('/',function(req,res){
    res.render('index');
});


app.listen(port,function(err){
    console.log('Running server on port '+port);
});

