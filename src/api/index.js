var express = require('express');
var Resurs = require('../models/model');
var router = express.Router();

router.get('/', function(req, res, next) {

	console.log("Detta är api routern");
	res.json({name: "Andreas"});

});

router.get('/resurs', function(req, res, next) {

	Resurs.find( ).then(function(allData) {

		res.json(allData);

	});

});

router.get('/resurs/:id', function(req, res, next) {

	Resurs.find({_id:req.params.id}).then(function(idData) {

		res.json(idData);

	});
});


router.delete('/delete/:id', function(req, res, next) {

	Resurs.remove({_id:req.params.id}).then(function(deleted) {

		res.end();

	});

});

router.get('/aggregate', function(req, res, next) {

	Resurs.aggregate([{ $group: { _id: "$title", num_of : { $sum: 1 }}}], function (err, result) {
        
        if (err) {
            console.log(err);
            return;
        }

        res.json(result);
    
    });

});

router.post('/resurs', function(req, res, next) {

	console.log(req.body);
	var arr = new Array();

	var resurs = new Resurs({

		title: req.body.title,
		example: req.body.example,
		comments: arr

	});

	resurs.save(function(err) {

		if (err) {
			console.log("Error!");
		}
	});

	res.redirect('/add.html');

});

router.post('/edit', function(req, res, next) {

	console.log(req.body);

	var id = req.body.commentId;
	var title = req.body.editTitle;
	var example = req.body.editExample;

	Resurs.findByIdAndUpdate(id, { $set: 
		
		{ 
			title: title,
			example: example 
		}

	}, function (err, tank) {
  		
  		if (err) return handleError(err);
  		
  		res.redirect('/resurs');
	
	});
	
});

router.post('/addcomment', function(req, res, next) {

	var date = new Date();
	date = date.toGMTString();

	Resurs.update({_id:req.body.commentId}, {$push: {comments: {name:req.body.name, comment: req.body.addcomment, date: date}}}).then(function(update) {
		
		res.redirect('/resurs');

	});
	
});

module.exports = router;