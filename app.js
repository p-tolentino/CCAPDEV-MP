const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');


//check if I need this
const User = require('./database/models/User')

mongoose.connect('mongodb://localhost/account-db');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'hbs');
var hbs = require('hbs')

app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'index',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
}));



const port = 3000;
app.listen(port, function(){
    console.log('Listening to port ' + port);
});


app.get('/', ( req, res ) => {
    res.render("home", {title: 'Home | Family App'});
})

app.get('/login', ( req, res ) => {
    res.render("login", {title: 'Login Account | Family App'});
})

app.get('/logout', ( req, res ) => {
    res.render("logout", {title: 'Logout | Family App'});
})

app.get('/recoverAcc', ( req, res ) => {
    res.render("recoverAcc", {title: 'Recover Account | Family App'});
})

app.get('/register', ( req, res ) => {
    res.render("register", {title: 'Register Account | Family App'});
})

app.get('/search', ( req, res ) => {
    res.render("search", {title: 'Search | Family App'});
})

app.get('/editAccount', ( req, res ) => {
    res.render("editAccount", {title: 'Edit Account Settings | Family App'});
})

app.get('/*', ( req, res ) => {
    res.render("404notfound", {title: 'Error 404 | Page Not Found'});
})

app.post('/submit-post', function(req, res) {
    Post.create(req.body, (error, post) =>
    {
        res.redirect('/')
    })
});
//need to add content html
app.get('/content', async(req,res) => {
    const posts = await Post.find({})
    res.render('content',{posts})
})
app.post('/submit-user', function(req, res) {
    User.create(req.body, (error, post) =>
    {
        res.redirect('/')
    })
});
