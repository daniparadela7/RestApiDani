var express = require('express');
var router = express.Router();

router.route('/cafeteria')

	.get(function(req, res, next){
		CafeteriaClubhyd.getCafeteria(function(err, cafeteria){
			if(err){
				throw err;
			}
			res.json(cafeteria);
		})
	})

	.post(function(req, res){
		var cafeteria = req.body;
		CafeteriaClubhyd.addCafeteria(cafeteria, function(err, cafeteria){
			if(err){
				throw err;
			}
			res.json(cafeteria);
		})
	});


router.route('/cafeterialink/:pretty_url')

	.get(function(req, res, next){
		var pretty_url = req.params.pretty_url;
		CafeteriaClubhyd.getCafeteriaSelect(pretty_url, function(err, cafeteria){
			if(err){
				throw err;
			}
			res.json(cafeteria);
		})
	})		


router.route('/cafeteria/:_id')

	.get(function(req, res, next){
		var id = req.params._id;
		CafeteriaClubhyd.getFotoCafeteria(id, function(err, cafeteria){
			if(err){
				throw err;
			}
			res.json(cafeteria);
		})
	})

	.put(function(req, res){
		var id = req.params._id;
		var cafeteria = req.body;
		CafeteriaClubhyd.updateCafeteria(id, cafeteria, function(err, cafeteria){
			if(err){
				throw err;
			}
			res.json(cafeteria);
		})
	})

	.delete(function(req, res){
		var id = req.params._id;
		var cafeteria = req.body;
		CafeteriaClubhyd.removeCafeteria(id, function(err, cafeteria){
			if(err){
				throw err;
			}
			res.json(cafeteria);
		})
	});

module.exports = router;