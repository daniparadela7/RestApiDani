var express = require('express');
var router = express.Router();

router.route('/reservas')

	.get(function(req, res, next){
		ReservaPadel.getReservas(function(err, reservas){
			if(err){
				throw err;
			}
			res.json(reservas);
		})
	})

	.post(function(req, res){
		ReservaPadel.findOne({ $and: [ { pista: req.body.pista }, { $or: [{ start: { $gt: req.body.start, $lt: req.body.end } }, { end: { $gt: req.body.start, $lt: req.body.end } }, { $and: [{ start: req.body.start }, { end: req.body.end }]} ]} ] }, function(err, reserva){
			if(err){
				throw err;
			}
			if(!reserva){
				var reserva = req.body;
				var unaHora = new Date(reserva.start);
				unaHora.setHours(unaHora.getHours()+1);
				var reservaFinal = new Date(reserva.end);
				var tresHoras = new Date(reserva.start);
				tresHoras.setHours(tresHoras.getHours()+3);
				if(unaHora > reservaFinal){
					res.status(500).json({success: false, message: 'El mínimo tiempo de la reserva es de una hora'});
				}
				else if(tresHoras < reservaFinal){
					res.status(500).json({success: false, message: 'El máximo tiempo de la reserva es de tres horas'});
				}
				else{
					var reserva = req.body;
					var mediaHoraMenos = new Date(reserva.start);
					mediaHoraMenos.setMinutes(mediaHoraMenos.getMinutes()-30);
					var mediaHoraMas = new Date(reserva.end);
					mediaHoraMas.setMinutes(mediaHoraMas.getMinutes()+30);
					ReservaPadel.findOne({ $and: [ { pista: req.body.pista }, { $or: [{ $and: [{ start: {$ne: mediaHoraMenos} }, { end: mediaHoraMenos } ]}, { $and: [{ end: {$ne: mediaHoraMas} }, { start: mediaHoraMas } ]}] } ] }, function(err, reserva){
						if(err){
							throw err;
						}
						if(reserva){
							res.status(500).json({success: false, message: 'No puedes dejar espacios libres menores de 60 minutos'});
						}
						else if(!reserva){
							var reserva = req.body;
							var fechaHoy = new Date();
							fechaHoy.setHours(fechaHoy.getHours()+2);
							var fechaReserva = new Date(reserva.start);
							if(fechaReserva < fechaHoy){
								res.status(500).json({success: false, message: 'Esta hora ya ha pasado'});
							}
							else{
								ReservaPadel.addReserva(reserva, function(err, reserva){
									if(err){
										throw err;
									}
									return res.status(200).json(reserva);
								})
							}
						}
					})
				}
			}
			else if(reserva){
				res.status(500).json({success: false, message: 'Ya hay reservas durante este tiempo'});
			}
		})
	})


router.route('/reservas/:_id')

	.get(function(req, res, next){
		var id = req.params._id;
		ReservaPadel.getReserva(id, function(err, reserva){
			if(err){
				throw err;
			}
			res.json(reserva);
		})
	})

	.put(function(req, res){
		var id = req.params._id;
		var reserva = req.body;
		ReservaPadel.updateReserva(id, reserva, function(err, reserva){
			if(err){
				throw err;
			}
			res.json(reserva);
		})
	})

	.delete(function(req, res){
		var id = req.params._id;
		var reserva = req.body;
		ReservaPadel.removeReserva(id, function(err, reserva){
			if(err){
				throw err;
			}
			res.json(reserva);
		})
	});

module.exports = router;