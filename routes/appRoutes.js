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
}
