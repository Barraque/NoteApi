var express = require('express'),
	app = express(),
	bodyparser = require('body-parser');
	port = process.env.PORT || 8080;

const mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'louis',
    password : '21808160',
    database : 'notebase'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;

app.listen(port);
console.log('server started');

app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

var routes = require('./routes/appRoutes.js');
routes(app);
