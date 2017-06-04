//create new express router
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
//controller for routes callbacks
var mainController = require('./controllers/mainController');
var todoController = require('./controllers/todoController');


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

//fire todoController
//todoController(router);
router.get('/todo', todoController.listHome);
router.post('/todo', urlencodedParser, todoController.listSend);
router.delete('/todo/:item', todoController.listDelete);