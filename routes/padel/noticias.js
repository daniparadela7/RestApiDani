var express = require('express');
var router = express.Router();

router.route('/noticias')

	.get(function(req, res, next){
		NoticiaPadel.getNoticias(function(err, noticia){
			if(err){
				throw err;
			}
			res.json(noticia);
		})
	})

	.post(function(req, res){
		var noticia = req.body;
		NoticiaPadel.addNoticia(noticia, function(err, noticia){
			if(err){
				throw err;
			}
			res.json(noticia);
		})
	});

router.route('/noticias/:pretty_url')

	.get(function(req, res, next){
		var pretty_url = req.params.pretty_url;
		NoticiaPadel.getNoticiaSelect(pretty_url, function(err, noticia){
			if(err){
				throw err;
			}
			res.json(noticia);
		})
	})		

router.route('/noticias/:_id')

	.get(function(req, res, next){
		var id = req.params._id;
		NoticiaPadel.getNoticia(id, function(err, noticia){
			if(err){
				throw err;
			}
			res.json(noticia);
		})
	})

	.put(function(req, res){
		var id = req.params._id;
		var noticia = req.body;
		NoticiaPadel.updateNoticia(id, noticia, function(err, noticia){
			if(err){
				throw err;
			}
			res.json(noticia);
		})
	})

	.delete(function(req, res){
		var id = req.params._id;
		var noticia = req.body;
		NoticiaPadel.removeNoticia(id, function(err, noticia){
			if(err){
				throw err;
			}
			res.json(noticia);
		})
	});

module.exports = router;