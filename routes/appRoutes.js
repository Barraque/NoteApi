'use strict';
module.exports = function(app) {
var express = require('express');
var todoList = require('../controller/appController.js');

app.get('/node/:id',function(req,res){
		todoList.get_note(req,res);	
	});
app.post('/node',function(req,res){
		todoList.create_a_note(req,res);	
	});
app.post('/node/login',function(req,res){
		todoList.get_auth(req,res);	
	});
app.get('/node/drive/file/:name',function(req,res){
		todoList.get_a_file(req,res);	
	});
app.get('/node/drive/liste',function(req,res){
		todoList.get_files(req,res);	
	});
app.post('/node/drive/put',function(req,res){
		todoList.place_a_file(req,res);	
	});
}



/*
  // todoList Routes
  app.route('node/id')
    .get(todoList.list_all_id)
    .post(todoList.create_a_id);
   
   app.route('node/id/:id')
    .get(todoList.read_a_id)
    };
*/
