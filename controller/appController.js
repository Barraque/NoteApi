'use strict';
const shortid = require('shortid');
var Task = require('../model/NoteappModel.js');
var Drive = require('../model/DriveappModel.js');
var jwt = require('jsonwebtoken');
var Controller = {};
const secretkey = "secretkey";
Controller.get_note = function(req, res) {
	Task.getNote(req.params.id,function(err, task) {

			if (err)
				res.send(err);
			if(task[0]){
				console.log('res', task);
				res.json(task);
			}
			else{
				res.status(400);
				console.log("genre");
				res.send("Bad id");
			}
			});
};

Controller.create_a_note = function(req, res) {
	var new_note = new Task(shortid.generate(),req.body);
	if( !new_note || !new_note.txt){
		res.status(400).send({error:true, message: 'Please provide a txt'});
	}
	else{
		Task.createNote(new_note,function(new_note, task) {

				//if (err)
				// res.send(err);
				console.log('res', task);
				res.json(task);
				});
	}
};
Controller.get_auth = function(req,res){
	const spawn = require("child_process").spawn;
	const pythonProcess = spawn('python',['-u',"scriptpy/totppassword.py","SECRETBASED32"]);
	pythonProcess.stdout.on('data',(passwd) => {
		if(req.body.passwd.toString() == JSON.parse(passwd)){
			jwt.sign({passwd},secretkey,{expiresIn:'5m'},(err,token) => {
			res.json({token:token});	
			});
		}
		else{
			res.sendStatus(403);
		}
	});


};
function verifyToken(req,res){
	const bearer = req.headers['authorization'];
	if(typeof bearer !== 'undifined'){
		const bearerToken = bearer.split(' ')[2];
		console.log(bearerToken);
		req.token = bearerToken;	
		return (jwt.verify(req.token,secretkey,(err,data) => {
			if(err){
				return false;
			}
			return true;
		}));
	}
	else{
		return false;
	}
}
Controller.place_a_file = function(req,res) {
	if(verifyToken(req,res)){
		console.log(Drive.uploadfile);
		Drive.uploadfile(req,function(err,file){
			if (err){
				console.log(err);
				res.status(400);
				res.send(err);
			}
			else{
				console.log(file);
				res.status(200);
				res.send(file)
			}
		});

	}
	else {
		res.sendStatus(403);
	}
};
Controller.get_files = function(req,res){
	if(verifyToken(req,res)){
		Drive.getlistoffiles(function(err,liste){
			if(err){
				console.log(err);
				res.status(500);
				res.send(err);
			}
			else{
				console.log(liste);
				res.status(200);
				res.send(liste);
			}
		});
	}
	else{
		res.sendStatus(403);
	}	
}
Controller.get_a_file = function(req,res){
	if(verifyToken(req,res)){
		Drive.getafile(res,req.params.name,(err,file)=>{
			if(err){
				console.log(err);
				res.status(400);
				res.send(err);
			}
			else{
				console.log(file);
			}
		});
	}
	else{
		res.sendStatus(403);
	}	
}
module.exports = Controller;
