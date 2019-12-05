'user strict';
var sql = require('./db.js');

//Task object constructor
var note = function(id,notes){
	this.id = id;
    this.txt = notes.txt;
};

note.createNote = function (notes,result){
	console.log(notes.id);
	sql.query("INSERT INTO notes SET ?", notes, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res);
                    result(null,notes.id);
                }
            });   
};

note.getNote= function (id,result){
	sql.query("SELECT txt from notes where id= ?", id, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res);
                    result(null, res);
                }
            });   
};
module.exports = note;
