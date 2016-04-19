var mongoose = require('mongoose');

var resursSchema = new mongoose.Schema({
	
	title: String,
	input: String

});

var model = mongoose.model('Resurs', resursSchema);

module.exports = model;