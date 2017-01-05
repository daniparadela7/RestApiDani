var express = require('express');
var router = express.Router();

router.route('/noticias')

	.get(function(req, res, next){
		NoticiaClubhyd.getNoticias(function(err, noticia){
			if(err){
				throw err;
			}
			res.json(noticia);
		})
	})

	.post(function(req, res){
		var noticia = req.body;
		NoticiaClubhyd.addNoticia(noticia, function(err, noticia){
			if(err){
				throw err;
			}
			res.json(noticia);
		})
	});

router.route('/noticialink/:pretty_url')

	.get(function(req, res, next){
		var pretty_url = req.params.pretty_url;
		NoticiaClubhyd.getNoticiaSelect(pretty_url, function(err, noticia){
			if(err){
				throw err;
			}
			res.json(noticia);
		})
	})		

router.route('/noticias/:_id')

	.get(function(req, res, next){
		var id = req.params._id;
		NoticiaClubhyd.getNoticia(id, function(err, noticia){
			if(err){
				throw err;
			}
			res.json(noticia);
		})
	})

	.put(function(req, res){
		var id = req.params._id;
		var noticia = req.body;
		NoticiaClubhyd.updateNoticia(id, noticia, function(err, noticia){
			if(err){
				throw err;
			}
			res.json(noticia);
		})
	})

	.delete(function(req, res){
		var id = req.params._id;
		var noticia = req.body;
		NoticiaClubhyd.removeNoticia(id, function(err, noticia){
			if(err){
				throw err;
			}
			res.json(noticia);
		})
	});

module.exports = router;