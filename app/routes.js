//create new express router
var express = require('express');
var router = express.Router();
var mainController = require('./controllers/mainController');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://admin:yoloswag@ds161931.mlab.com:61931/heroku_pc2nqvld');

//body parser for form data
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//export router
module.exports = router;

//define routes
router.get('/', function (req, res) {
    res.render('index');
});

router.get('/about', function (req, res) {
    res.render('about');
});

router.get('/contact', function (req, res) {
    res.render('contact', { qs: req.query });
});

router.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('contact-success', { data: req.body });
});

router.get('/projects', function (req, res) {
    console.log(req.body);
    res.render('projects');
});

//MINI PROJECTS AND TINGS
router.get('/profile/:id', function (req, res) {
    var dummyData = { age: 15, job: 'plumber', hobbies: ['eating', 'fighting', 'football'] };
    res.render('projects/profile', { person: req.params.id, dummyData: dummyData });
});

router.get('/todo', function (req, res) {
    res.render('projects/todo');
})