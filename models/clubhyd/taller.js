var mongoose = require('mongoose');
var clubhyd = mongoose.createConnection('mongodb://localhost/clubhyd');

var tallerSchema = mongoose.Schema({
	titulo_principal:{
		type: String
	},
	texto_principal:{
		type: String
	},
	taller:{
		type: Array
	},
	apartados:{
		type: Array
	}
});

var Taller = module.exports = clubhyd.model('Taller', tallerSchema);

//Get Taller
module.exports.getTalleres = function(callback, limit){
	Taller.find(callback).limit(limit);
}

//Add Taller
module.exports.addTaller = function(taller, callback){
	Taller.create(taller, callback);
}

//Get Taller
module.exports.getTaller = function(id, callback, limit){
	var query = {_id: id};
	Taller.find(query, callback).limit(limit);
}

//Get Taller Select
module.exports.getTallerSelect = function(pretty_url, callback, limit){
	var query = {pretty_url: pretty_url};
	Taller.find(query, callback).limit(limit);
}

//Update Taller
module.exports.updateTaller = function(id, taller, callback){
	var query = {_id: id};
	Taller.findOneAndUpdate(query, taller, callback);
}

//Delete Taller
module.exports.removeTaller = function(id, callback){
	var query = {_id: id};
	Taller.remove(query, callback);
}