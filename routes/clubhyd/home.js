var express = require('express');
var router = express.Router();

router.route('/home')

	.get(function(req, res, next){
		HomeClubhyd.getHomes(function(err, home){
			if(err){
				throw err;
			}
			res.json(home);
		})
	})

	.post(function(req, res){
		var home = req.body;
		HomeClubhyd.addHome(home, function(err, home){
			if(err){
				throw err;
			}
			res.json(home);
		})
	});


router.route('/homelink/:pretty_url')

	.get(function(req, res, next){
		var pretty_url = req.params.pretty_url;
		HomeClubhyd.getHomeSelect(pretty_url, function(err, home){
			if(err){
				throw err;
			}
			res.json(home);
		})
	})		


router.route('/home/:_id')

	.get(function(req, res, next){
		var id = req.params._id;
		HomeClubhyd.getHome(id, function(err, home){
			if(err){
				throw err;
			}
			res.json(home);
		})
	})

	.put(function(req, res){
		var id = req.params._id;
		var home = req.body;
		HomeClubhyd.updateHome(id, home, function(err, home){
			if(err){
				throw err;
			}
			res.json(home);
		})
	})

	.delete(function(req, res){
		var id = req.params._id;
		var home = req.body;
		HomeClubhyd.removeHome(id, function(err, home){
			if(err){
				throw err;
			}
			res.json(home);
		})
	});

module.exports = router;