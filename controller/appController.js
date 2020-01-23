'use strict';
const randomwords = require('random-words');
var Task = require('../model/NoteappModel.js');
var Controller = {};
Controller.get_note = function(req, res) {
	Task.getNote(req.params.id,function(err, task) {
			if (err)
				res.send(err);
			if(task[0]){
				res.json(task);
			}
			else{
				res.status(400);
				res.send("Bad id");
			}
			});
};

Controller.create_a_note = function(req, res) {
	if(!req.body.txt){
		res.status(400).send({error:true, message: 'Please provide a txt'});
	}
	Task.createNote(new Task(randomwords(),req.body.txt), function(new_note, task) {
			res.json(task);
			});
};
module.exports = Controller;
