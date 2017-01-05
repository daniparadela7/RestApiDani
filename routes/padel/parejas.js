var express = require('express');
var router = express.Router();

router.route('/parejas')

	.get(function(req, res, next){
		ParejaPadel.getParejas(function(err, parejas){
			if(err){
				throw err;
			}
			res.json(parejas);
		})
	})

	.post(function(req, res){
		ParejaPadel.findOne({ $or: [{ jugador1: req.body.jugador1 }, { jugador2: req.body.jugador1 }]}, function(err, pareja){
			if(err){
				throw err;
			}
			if(!pareja){
				var pareja = req.body;
				ParejaPadel.addPareja(pareja, function(err, pareja){
					if(err){
						throw err;
					}
					return res.status(200).json(pareja);
				})
			}
			else if(pareja){
				if(pareja.jugador1 == req.body.jugador1){
					if(pareja.aceptado == true){
						res.status(500).json({success: false, message: 'Ya tienes una pareja asignada.'});
					}
					else if(pareja.aceptado == false){
						res.status(500).json({success: false, message: 'Ya tienes una solicitud de pareja en marcha.'});
					}
				}
				else if(pareja.jugador2 == req.body.jugador1){
					if(pareja.aceptado == true){
						res.status(500).json({success: false, message: 'Ya tienes una pareja asignada.'});
					}
					else if(pareja.aceptado == false){
						var pareja = req.body;
						ParejaPadel.addPareja(pareja, function(err, pareja){
							if(err){
								throw err;
							}
							return res.status(200).json(pareja);
						})
					}
				}
			}
		})
	})


router.route('/parejas/:_id')

	.get(function(req, res, next){
		var id = req.params._id;
		ParejaPadel.getPareja(id, function(err, pareja){
			if(err){
				throw err;
			}
			res.json(pareja);
		})
	})

	.put(function(req, res){
		var id = req.params._id;
		var pareja = req.body;
		ParejaPadel.updatePareja(id, pareja, function(err, pareja){
			if(err){
				throw err;
			}
			res.json(pareja);
		})
	})

	.delete(function(req, res){
		var id = req.params._id;
		var pareja = req.body;
		ParejaPadel.removePareja(id, function(err, pareja){
			if(err){
				throw err;
			}
			res.json(pareja);
		})
	});

module.exports = router;