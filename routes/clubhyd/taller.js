var express = require('express');
var router = express.Router();

router.route('/taller')

	.get(function(req, res, next){
		TallerClubhyd.getTalleres(function(err, taller){
			if(err){
				throw err;
			}
			res.json(taller);
		})
	})

	.post(function(req, res){
		var taller = req.body;
		TallerClubhyd.addTaller(taller, function(err, taller){
			if(err){
				throw err;
			}
			res.json(taller);
		})
	});


router.route('/tallerlink/:pretty_url')

	.get(function(req, res, next){
		var pretty_url = req.params.pretty_url;
		TallerClubhyd.getTallerSelect(pretty_url, function(err, taller){
			if(err){
				throw err;
			}
			res.json(taller);
		})
	})		


router.route('/taller/:_id')

	.get(function(req, res, next){
		var id = req.params._id;
		TallerClubhyd.getTaller(id, function(err, taller){
			if(err){
				throw err;
			}
			res.json(taller);
		})
	})

	.put(function(req, res){
		var id = req.params._id;
		var taller = req.body;
		TallerClubhyd.updateTaller(id, taller, function(err, taller){
			if(err){
				throw err;
			}
			res.json(taller);
		})
	})

	.delete(function(req, res){
		var id = req.params._id;
		var taller = req.body;
		TallerClubhyd.removeTaller(id, function(err, taller){
			if(err){
				throw err;
			}
			res.json(taller);
		})
	});

module.exports = router;