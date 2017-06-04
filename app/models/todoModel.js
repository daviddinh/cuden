var mongoose = require('mongoose');
var schema = mongoose.Schema;

//create a schema
var todoSchema = new mongoose.Schema({
    item: String
});

//create a model
var todo = mongoose.model('todo', todoSchema);

//export the model
module.exports = todo;