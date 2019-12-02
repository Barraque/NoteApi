'user strict';
var sql = require('./db.js');

//Task object constructor
var Id = function(ids){
    this.id = ids.id;
};

Id.getAllId = function (result){
	console.log("ici");
	sql.query("SELECT * FROM IDS", function (err, res) {
                
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
Id.createId = function (newId,result){
	sql.query("INSERT INTO IDS SET ?", newId, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res);
                    result(res.affectedRows,res);
                }
            });   
};

Id.getId= function (newId,result){
	sql.query("SELECT id from IDS where id= ?", newId, function (err, res) {
                
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
module.exports = Id;
