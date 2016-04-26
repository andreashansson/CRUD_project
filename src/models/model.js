var mongoose = require('mongoose');

var resursSchema = new mongoose.Schema({
	
	title: String,
	example: String,
	comments: Object,
	date: String

});

var model = mongoose.model('Resurs', resursSchema);

module.exports = model;