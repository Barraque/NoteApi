'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'user',
    password : '',
    database : 'notebase'
});

connection.connect(function(err) {
    if (err) throw err;
    else console.log("connected");
});

module.exports = connection;
