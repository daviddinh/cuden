//require dependencies
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

//setting ejs view engine
app.set('view engine', 'ejs');

//use assets
app.use('/public', express.static('public'));

//set routes
app.use(require('./app/routes'));

//start up server
app.listen(port, function () {
    console.log('App has started, listening on http://localhost:' + port);
});