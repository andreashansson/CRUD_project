var mongoose = require('mongoose');

var resursSchema = new mongoose.Schema({
	
	title: {type: String, required: true},
	example: {type: String, required: true},
	comments: {type: Object},
	date: {type: String}

});

var model = mongoose.model('Resurs', resursSchema);

module.exports = model;