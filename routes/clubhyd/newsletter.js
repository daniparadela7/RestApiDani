var express = require('express');
var router = express.Router();

router.route('/newsletter')

	.get(function(req, res, next){
		NewsletterClubhyd.getNewsletters(function(err, newsletter){
			if(err){
				throw err;
			}
			res.json(newsletter);
		})
	})

	.post(function(req, res){
		var newsletter = req.body;
		NewsletterClubhyd.addNewsletter(newsletter, function(err, newsletter){
			if(err){
				throw err;
			}
			res.json(newsletter);
		})
	});


router.route('/newsletterlink/:pretty_url')

	.get(function(req, res, next){
		var pretty_url = req.params.pretty_url;
		NewsletterClubhyd.getNewsletterSelect(pretty_url, function(err, newsletter){
			if(err){
				throw err;
			}
			res.json(newsletter);
		})
	})		


router.route('/newsletter/:_id')

	.get(function(req, res, next){
		var id = req.params._id;
		NewsletterClubhyd.getNewsletter(id, function(err, newsletter){
			if(err){
				throw err;
			}
			res.json(newsletter);
		})
	})

	.put(function(req, res){
		var id = req.params._id;
		var newsletter = req.body;
		NewsletterClubhyd.updateNewsletter(id, newsletter, function(err, newsletter){
			if(err){
				throw err;
			}
			res.json(newsletter);
		})
	})

	.delete(function(req, res){
		var id = req.params._id;
		var newsletter = req.body;
		NewsletterClubhyd.removeNewsletter(id, function(err, newsletter){
			if(err){
				throw err;
			}
			res.json(newsletter);
		})
	});

module.exports = router;