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

// create slug from the name middleware
crudSchema.pre('save', function(next){
    this.slug = slugify(this.name);
    next();
});

//create a model
var product = mongoose.model('products', crudSchema);

//export the model
module.exports = product;

//function to slugify
function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}