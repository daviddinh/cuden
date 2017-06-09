//create new express router
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

//controller for routes callbacks
var mainController = require('./controllers/mainController');
var todoController = require('./controllers/todoController');
var crudController = require('./controllers/crudController');

//body parser for form data
router.use(bodyParser.urlencoded({ extended: false }));

//export router
module.exports = router;

/* ========== DEFINE ROUTES ========== */
router.get('/', function (req, res) {
    res.render('index');
});

router.get('/about', function (req, res) {
    res.render('about');
});

router.get('/contact', function (req, res) {
    res.render('contact', { qs: req.query });
});

router.post('/contact', function (req, res) {
    console.log(req.body);
    res.render('contact-success', { data: req.body });
});

router.get('/projects', function (req, res) {
    console.log(req.body);
    res.render('projects');
});

/* ========== MINI PROJECTS AND TINGS ========== */

//profile page
router.get('/profile/:id', function (req, res) {
    var dummyData = { age: 15, job: 'plumber', hobbies: ['eating', 'fighting', 'football'] };
    res.render('projects/profile', { person: req.params.id, dummyData: dummyData });
});

//fire todoController
router.get('/todo', todoController.listHome);
router.post('/todo', todoController.listSend);
router.delete('/todo/:item', todoController.listDelete);

//CRUD
router.get('/crud', crudController.listProducts); //list all products
router.get('/crud/new', crudController.newProduct); //load create product form
router.post('/crud/new', crudController.saveNewProduct); //create new product
router.delete('/crud/:product', crudController.deleteProduct);

