var express = require('express');
var router = express.Router();

router.route('/nosotros')

	.get(function(req, res, next){
		NosotrosClubhyd.getNosotros(function(err, nosotros){
			if(err){
				throw err;
			}
			res.json(nosotros);
		})
	})

	.post(function(req, res){
		var nosotros = req.body;
		NosotrosClubhyd.addNosotros(nosotros, function(err, nosotros){
			if(err){
				throw err;
			}
			res.json(nosotros);
		})
	});


router.route('/nosotroslink/:pretty_url')

	.get(function(req, res, next){
		var pretty_url = req.params.pretty_url;
		NosotrosClubhyd.getNosotrosSelect(pretty_url, function(err, nosotros){
			if(err){
				throw err;
			}
			res.json(nosotros);
		})
	})		


router.route('/nosotros/:_id')

	.get(function(req, res, next){
		var id = req.params._id;
		NosotrosClubhyd.getPersonal(id, function(err, nosotros){
			if(err){
				throw err;
			}
			res.json(nosotros);
		})
	})

	.put(function(req, res){
		var id = req.params._id;
		var nosotros = req.body;
		NosotrosClubhyd.updateNosotros(id, nosotros, function(err, nosotros){
			if(err){
				throw err;
			}
			res.json(nosotros);
		})
	})

	.delete(function(req, res){
		var id = req.params._id;
		var nosotros = req.body;
		NosotrosClubhyd.removeNosotros(id, function(err, nosotros){
			if(err){
				throw err;
			}
			res.json(nosotros);
		})
	});

module.exports = router;