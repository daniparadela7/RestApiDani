var express = require('express');
var router = express.Router();

router.route('/imagen')

	.get(function(req, res, next){
		ImagenClubhyd.getImagenes(function(err, imagen){
			if(err){
				throw err;
			}
			res.json(imagen);
		})
	})

	.post(function(req, res){
		var imagen = req.body;
		ImagenClubhyd.addImagen(imagen, function(err, imagen){
			if(err){
				throw err;
			}
			res.json(imagen);
		})
	});


router.route('/imagenlink/:album')

	.get(function(req, res, next){
		var album = req.params.album;
		ImagenClubhyd.getImagenesSelect(album, function(err, imagen){
			if(err){
				throw err;
			}
			res.json(imagen);
		})
	})		


router.route('/imagen/:_id')

	.get(function(req, res, next){
		var id = req.params._id;
		ImagenClubhyd.getImagen(id, function(err, imagen){
			if(err){
				throw err;
			}
			res.json(imagen);
		})
	})

	.put(function(req, res){
		var id = req.params._id;
		var imagen = req.body;
		ImagenClubhyd.updateImagen(id, imagen, function(err, imagen){
			if(err){
				throw err;
			}
			res.json(imagen);
		})
	})

	.delete(function(req, res){
		var id = req.params._id;
		var imagen = req.body;
		ImagenClubhyd.removeImagen(id, function(err, imagen){
			if(err){
				throw err;
			}
			res.json(imagen);
		})
	});

module.exports = router;