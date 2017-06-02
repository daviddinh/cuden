//create new express router
var express = require('express');
var router = express.Router();
var mainController = require('./controllers/main.controller');
var bodyParser = require('body-parser');

//body parser for form data
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//export router
module.exports = router;

//define routes
router.get('/', mainController.showHome);

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

router.get('/profile/:id', function (req, res) {
    var dummyData = { age: 15, job: 'plumber', hobbies: ['eating', 'fighting', 'football'] };
    res.render('profile', { person: req.params.id, dummyData: dummyData });
});