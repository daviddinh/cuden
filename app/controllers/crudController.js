var mongoose = require('mongoose');
var productModel = require('../models/productModel');

//connect to database
mongoose.connect('mongodb://admin:yolo@ds161931.mlab.com:61931/heroku_vzwh3llq');

module.exports = {
    listProducts: function (req, res) {
        productModel.find({}, function (err, data) {
            if (err) throw err;
            res.render('projects/crud', { todos: data });
        });
    },
    newProduct: function(req, res){
        var newProduct = productModel(req.body).save(function(err,data){
            if (err) throw err;
            res.json(data);
        });
    }
}