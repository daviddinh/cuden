var mongoose = require('mongoose');
var productModel = require('../models/crudModel');

//connect to database
mongoose.connect('mongodb://admin:yolo@ds161931.mlab.com:61931/heroku_vzwh3llq');

module.exports = {
    listProducts: function (req, res) {
        productModel.find({}, function (err, data) {
            if (err) throw err;
            res.render('projects/crud/crud', { products: data });
        });
    },
    newProduct: function (req, res) {
        res.render('projects/crud/new');
    },
    saveNewProduct: function (req, res) {
        console.log(req.body);
        var newProduct = productModel(req.body).save(function (err, data) {
            if (err) throw err;
            res.render('projects/crud/new');
        });
    },
    deleteProduct: function (req, res) {
        //delete item from db
        productModel.find({ item: req.params.item.replace(/\-/g, " ") }).remove(function (err, data) {
            if (err) throw err;
            //res.render('projects/crud');
            console.log(data);
        });
    }
}