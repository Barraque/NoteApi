var formidable = require('formidable');
var drive = {};

drive.uploadfile = function(new_file,result){

	var form = new formidable.IncomingForm();
	form.parse(new_file);
	form.on('fileBegin',function(name,file){
		console.log(file.name);
		file.path = "file/" + file.name;
		 
	});
	form.on('file',function(name,file){
		result(null,file.name);
	});

};
module.exports = drive;
