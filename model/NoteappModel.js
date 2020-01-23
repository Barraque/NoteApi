'user strict';
var sql = require('./db.js');
//Task object constructor
var note = function(id,txt){
	this.id = id;
	this.txt = txt;

};
note.createNote = function (note,result){
	sql.query("INSERT INTO notes SET ?", note, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log("new note !!!");
                    result(null,note.id);
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
					console.log("wow a note !!!");
					result(null, res);
                }
            });   
};
module.exports = note;
