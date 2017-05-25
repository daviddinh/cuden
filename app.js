var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/contact', function (req, res) {
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:id', function (req, res) {

    var dummyData = { age: 15, job: 'plumber', hobbies: ['eating', 'fighting','football'] };
    res.render('profile', { person: req.params.id, dummyData: dummyData });
});

app.listen(process.env.PORT || 3000, function(){
    console.log('App has started...');
});