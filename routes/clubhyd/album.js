var express = require('express');
var router = express.Router();

router.route('/album')

	.get(function(req, res, next){
		AlbumClubhyd.getAlbums(function(err, album){
			if(err){
				throw err;
			}
			res.json(album);
		})
	})

	.post(function(req, res){
		var album = req.body;
		AlbumClubhyd.addAlbum(album, function(err, album){
			if(err){
				throw err;
			}
			res.json(album);
		})
	});


router.route('/albumlink/:pretty_url')

	.get(function(req, res, next){
		var pretty_url = req.params.pretty_url;
		AlbumClubhyd.getAlbumSelect(pretty_url, function(err, album){
			if(err){
				throw err;
			}
			res.json(album);
		})
	})		


router.route('/album/:_id')

	.get(function(req, res, next){
		var id = req.params._id;
		AlbumClubhyd.getAlbum(id, function(err, album){
			if(err){
				throw err;
			}
			res.json(album);
		})
	})

	.put(function(req, res){
		var id = req.params._id;
		var album = req.body;
		AlbumClubhyd.updateAlbum(id, album, function(err, album){
			if(err){
				throw err;
			}
			res.json(album);
		})
	})

	.delete(function(req, res){
		var id = req.params._id;
		var album = req.body;
		AlbumClubhyd.removeAlbum(id, function(err, album){
			if(err){
				throw err;
			}
			res.json(album);
		})
	});

module.exports = router;