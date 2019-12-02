'use strict';

var Task = require('../model/appModel.js');
var Test = {};
Test.list_all_id = function(req, res) {
  Task.getAllId(function(err, task) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

Test.read_a_id = function(req, res) {
  Task.getId(req.params.id,function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', task);
    res.json(task);
  });
};
Test.create_a_id = function(req, res) {
  var new_id = new Task(req.body);
  console.log(new_id);  
  if( !new_id || !new_id.id){
	res.status(400).send({error:true, message: 'Please provide an id'});
	}
  else{
    Task.createId(new_id,function(new_id, task) {

    console.log('controller')
    //if (err)
      // res.send(err);
    console.log('res', task);
    res.json(task);
  });
}
};
module.exports = Test;
