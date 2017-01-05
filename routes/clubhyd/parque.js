var express = require('express');
var router = express.Router();

router.route('/parque')

	.get(function(req, res, next){
		ParqueClubhyd.getParques(function(err, parque){
			if(err){
				throw err;
			}
			res.json(parque);
		})
	})

	.post(function(req, res){
		var parque = req.body;
		ParqueClubhyd.addParque(parque, function(err, parque){
			if(err){
				throw err;
			}
			res.json(parque);
		})
	});


router.route('/parquelink/:pretty_url')

	.get(function(req, res, next){
		var pretty_url = req.params.pretty_url;
		ParqueClubhyd.getParqueSelect(pretty_url, function(err, parque){
			if(err){
				throw err;
			}
			res.json(parque);
		})
	})		


router.route('/parque/:_id')

	.get(function(req, res, next){
		var id = req.params._id;
		ParqueClubhyd.getParque(id, function(err, parque){
			if(err){
				throw err;
			}
			res.json(parque);
		})
	})

	.put(function(req, res){
		var id = req.params._id;
		var parque = req.body;
		ParqueClubhyd.updateParque(id, parque, function(err, parque){
			if(err){
				throw err;
			}
			res.json(parque);
		})
	})

	.delete(function(req, res){
		var id = req.params._id;
		var parque = req.body;
		ParqueClubhyd.removeParque(id, function(err, parque){
			if(err){
				throw err;
			}
			res.json(parque);
		})
	});

module.exports = router;