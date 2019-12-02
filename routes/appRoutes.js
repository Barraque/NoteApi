'use strict';
module.exports = function(app) {
var express = require('express');
var todoList = require('../controller/appController.js');

app.get('/node/id',function(req,res){
		todoList.list_all_id(req,res);	
	});
app.post('/node/id',function(req,res){
		todoList.create_a_id(req,res);	
	});
};



/*
  // todoList Routes
  app.route('node/id')
    .get(todoList.list_all_id)
    .post(todoList.create_a_id);
   
   app.route('node/id/:id')
    .get(todoList.read_a_id)
    };
*/
