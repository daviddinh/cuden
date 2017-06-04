// var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var todoModel = require('../models/todoModel');

//connect to database
mongoose.connect('mongodb://admin:yolo@ds161931.mlab.com:61931/heroku_vzwh3llq');


// var item = Todo({item: 'buuuuuuuuuuu'}).save(function(err){
//     if (err) throw err;
//     console.log('item saved');
// });

//var urlencodedParser = bodyParser.urlencoded({ extended: false });

// module.exports = function (router) {
//     //get data from mongodb and pass it to view
//     router.get('/todo', function (req, res) {
//         Todo.find({}, function (err, data) {
//             if (err) throw err;
//             res.render('projects/todo', { todos: data });
//         });
//     });

//     router.post('/todo', urlencodedParser, function (req, res) {
//         //get data from the view and save in mongodb
//         var newItem = Todo(req.body).save(function (err, data) {
//             if (err) throw err;
//             res.json(data);
//         });
//     });

//     router.delete('/todo/:item', function (req, res) {
//         //delete item from db
//         Todo.find({ item: req.params.item.replace(/\-/g, " ") }).remove(function (err, data) {
//             if (err) throw err;
//             res.json(data);
//         });
//     });
// };

module.exports = {
    listHome: function (req, res) {
        todoModel.find({}, function (err, data) {
            if (err) throw err;
            res.render('projects/todo', { todos: data });
        });
    },

    listSend: function (req, res) {
        //get data from the view and save in mongodb
        var newItem = todoModel(req.body).save(function (err, data) {
            if (err) throw err;
            res.json(data);
        });
    },


    listDelete: function (req, res) {
        //delete item from db
        todoModel.find({ item: req.params.item.replace(/\-/g, " ") }).remove(function (err, data) {
            if (err) throw err;
            res.json(data);
        });
    }
}