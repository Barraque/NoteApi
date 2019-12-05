'use strict';
const shortid = require('shortid');
var Task = require('../model/appModel.js');
var Test = {};
Test.get_note = function(req, res) {
  Task.getNote(req.params.id,function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', task);
    res.json(task);
  });
};

Test.create_a_note = function(req, res) {
  var new_note = new Task(shortid.generate(),req.body);
  console.log(new_note);  
  if( !new_note || !new_note.txt){
	res.status(400).send({error:true, message: 'Please provide a txt'});
	}
  else{
    Task.createNote(new_note,function(new_note, task) {

    console.log('controller')
    //if (err)
      // res.send(err);
    console.log('res', task);
    res.json(task);
  });
}
};
module.exports = Test;
