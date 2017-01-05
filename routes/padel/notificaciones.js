var express = require('express');
var router = express.Router();

router.route('/notificaciones')

	.get(function(req, res, next){
		NotificacionPadel.getNotificaciones(function(err, notificaciones){
			if(err){
				throw err;
			}
			res.json(notificaciones);
		})
	})

	.post(function(req, res){
		var notificacion = req.body;
		NotificacionPadel.addNotificacion(notificacion, function(err, notificacion){
			if(err){
				throw err;
			}
			res.json(notificacion);
		})
	})

router.route('notificaciones/:recibe')
	
	.get(function(req, res, next){
		var id = req.params.recibe;
		NotificacionPadel.getNotificacionesUsuario(id, function(err, notificaciones){
			if(err){
				throw err;
			}
			res.json(notificaciones);
		})
	})


router.route('/notificaciones/:_id')

	.get(function(req, res, next){
		var id = req.params._id;
		NotificacionPadel.getNotificacion(id, function(err, notificacion){
			if(err){
				throw err;
			}
			res.json(notificacion);
		})
	})

	.put(function(req, res){
		var id = req.params._id;
		var notificacion = req.body;
		NotificacionPadel.updateNotificacion(id, notificacion, function(err, notificacion){
			if(err){
				throw err;
			}
			res.json(notificacion);
		})
	})

	.delete(function(req, res){
		var id = req.params._id;
		var notificacion = req.body;
		NotificacionPadel.removeNotificacion(id, function(err, notificacion){
			if(err){
				throw err;
			}
			res.json(notificacion);
		})
	});

module.exports = router;