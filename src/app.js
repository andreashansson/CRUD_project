var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express();

require('./database');

app.use('/', express.static('public'));

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

app.use('/app', express.static('app'));
app.use('/api', router);
app.use('/delete', express.static('public/delete.html'));
app.use('/add', express.static('public/add.html'));
app.use('/resurs', express.static('public/resurs.html'));

// Denna raden används inte var innan när jag
// app.use('/resurs/:id', express.static('public/resursbyid.html'));

app.listen(3500, function() {
	
	console.log("The server is running on port 3500!");

});