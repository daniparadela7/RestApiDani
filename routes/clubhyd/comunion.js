var express = require('express');
var router = express.Router();

router.route('/comunion')

	.get(function(req, res, next){
		ComunionClubhyd.getComuniones(function(err, comunion){
			if(err){
				throw err;
			}
			res.json(comunion);
		})
	})

	.post(function(req, res){
		var comunion = req.body;
		ComunionClubhyd.addComunion(comunion, function(err, comunion){
			if(err){
				throw err;
			}
			res.json(comunion);
		})
	});


router.route('/comunionlink/:pretty_url')

	.get(function(req, res, next){
		var pretty_url = req.params.pretty_url;
		ComunionClubhyd.getComunionSelect(pretty_url, function(err, comunion){
			if(err){
				throw err;
			}
			res.json(comunion);
		})
	})		


router.route('/comunion/:_id')

	.get(function(req, res, next){
		var id = req.params._id;
		ComunionClubhyd.getComunion(id, function(err, comunion){
			if(err){
				throw err;
			}
			res.json(comunion);
		})
	})

	.put(function(req, res){
		var id = req.params._id;
		var comunion = req.body;
		ComunionClubhyd.updateComunion(id, comunion, function(err, comunion){
			if(err){
				throw err;
			}
			res.json(comunion);
		})
	})

	.delete(function(req, res){
		var id = req.params._id;
		var comunion = req.body;
		ComunionClubhyd.removeComunion(id, function(err, comunion){
			if(err){
				throw err;
			}
			res.json(comunion);
		})
	});

module.exports = router;