var express = require('express');
var router = express.Router();
var service = require('./../../services');

router.route('/users')

	.get(function(req, res, next){
		UserPadel.getUsers(function(err, users){
			if(err){
				throw err;
			}
			res.json(users);
		})
	})

	.post(function(req, res){
		UserPadel.findOne({ email: req.body.email }, function(err, user){
			if(err){
				throw err;
			}
			if(!user){
				var user = req.body;
				UserPadel.addUser(user, function(err, user){
					if(err){
						throw err;
					}
					return res.status(200).json(user);
				})
			}
			else if(user){
				res.status(500).json({success: false, message: 'Este email ya está registrado'});
			}
		})
	})

router.route('/perfil/:pretty_url')

	.get(function(req, res, next){
		var pretty_url = req.params.pretty_url;
		UserPadel.getUserPerfil(pretty_url, function(err, user){
			if(err){
				throw err;
			}
			res.json(user);
		})
	})	

router.route('/users/:_id')

	.get(function(req, res, next){
		var id = req.params._id;
		UserPadel.getUser(id, function(err, user){
			if(err){
				throw err;
			}
			res.json(user);
		})
	})

	.put(function(req, res){
		var id = req.params._id;
		var user = req.body;
		UserPadel.updateUser(id, user, function(err, user){
			if(err){
				throw err;
			}
			res.json(user);
		})
	})

	.delete(function(req, res){
		var id = req.params._id;
		var user = req.body;
		UserPadel.removeUser(id, function(err, user){
			if(err){
				throw err;
			}
			res.json(user);
		})
	});

module.exports = router;