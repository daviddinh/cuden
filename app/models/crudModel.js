var mongoose = require('mongoose');
var schema = mongoose.Schema;

//create a schema
var crudSchema = new mongoose.Schema({
    brand: String,
    name: String,
    slug: {
        type: String,
        unique: true
    },
    desc: String,
    price: Number,
    stock: Number
});

//create a model
var product = mongoose.model('products', crudSchema);

//export the model
module.exports = product;