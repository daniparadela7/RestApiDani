var mongoose = require('mongoose');
var clubhyd = mongoose.createConnection('mongodb://localhost/clubhyd');

var newsletterSchema = mongoose.Schema({
	niño:{
		type: Array
	},
	email:{
		type: String
	},
});

var Newsletter = module.exports = clubhyd.model('Newsletter', newsletterSchema);

//Get Newsletter
module.exports.getNewsletters = function(callback, limit){
	Newsletter.find(callback).limit(limit);
}

//Add Newsletter
module.exports.addNewsletter = function(newsletter, callback){
	Newsletter.create(newsletter, callback);
}

//Get Newsletter
module.exports.getNewsletter = function(id, callback, limit){
	var query = {_id: id};
	Newsletter.find(query, callback).limit(limit);
}

//Get Newsletter Select
module.exports.getNewsletterSelect = function(pretty_url, callback, limit){
	var query = {pretty_url: pretty_url};
	Newsletter.find(query, callback).limit(limit);
}

//Update Newsletter
module.exports.updateNewsletter = function(id, newsletter, callback){
	var query = {_id: id};
	Newsletter.findOneAndUpdate(query, newsletter, callback);
}

//Delete Newsletter
module.exports.removeNewsletter = function(id, callback){
	var query = {_id: id};
	Newsletter.remove(query, callback);
}