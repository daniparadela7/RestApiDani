var express = require('express');
var router = express.Router();
var service = require('./../../services');

router.route('/auth/login')

    .post(function(req, res){
		UserPadel.findOne({email: req.body.email}, function(err, user){
			if(err){
				throw err;
			}
			if(!user){
				res.status(500).json({success: false, message: 'Este email no está registrado'});
			}
			else if(user){
				if(user.contraseña != req.body.contraseña){
					res.status(500).json({success: false, message: 'La contraseña no es correcta'});
				}
				else{
					var query = {_id: user.id};
					var token = {
						token: service.createToken(user)
					}
					UserPadel.findOneAndUpdate(query, token, function(err, user){
						if(err){
							throw err;
						}
						return res.status(200).send(token);
			            res.json(user);
			        })
				}
			}
		})
	})

module.exports = router;