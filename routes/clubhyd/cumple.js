var express = require('express');
var router = express.Router();

router.route('/cumple')

	.get(function(req, res, next){
		CumpleClubhyd.getCumples(function(err, cumple){
			if(err){
				throw err;
			}
			res.json(cumple);
		})
	})

	.post(function(req, res){
		var cumple = req.body;
		CumpleClubhyd.addCumple(cumple, function(err, cumple){
			if(err){
				throw err;
			}
			res.json(cumple);
		})
	});


router.route('/cumplelink/:pretty_url')

	.get(function(req, res, next){
		var pretty_url = req.params.pretty_url;
		CumpleClubhyd.getCumpleSelect(pretty_url, function(err, cumple){
			if(err){
				throw err;
			}
			res.json(cumple);
		})
	})		


router.route('/cumple/:_id')

	.get(function(req, res, next){
		var id = req.params._id;
		CumpleClubhyd.getCumple(id, function(err, cumple){
			if(err){
				throw err;
			}
			res.json(cumple);
		})
	})

	.put(function(req, res){
		var id = req.params._id;
		var cumple = req.body;
		CumpleClubhyd.updateCumple(id, cumple, function(err, cumple){
			if(err){
				throw err;
			}
			res.json(cumple);
		})
	})

	.delete(function(req, res){
		var id = req.params._id;
		var cumple = req.body;
		CumpleClubhyd.removeCumple(id, function(err, cumple){
			if(err){
				throw err;
			}
			res.json(cumple);
		})
	});

module.exports = router;