var mongoose = require('mongoose');
var clubhyd = mongoose.createConnection('mongodb://localhost/clubhyd');

var comunionSchema = mongoose.Schema({
	titulo_principal_hada:{
		type: String
	},
	texto_principal_hada:{
		type: String
	},
	menu_niños:{
		type: Array
	},
	menu_adultos:{
		type: Array
	},
	apartados:{
		type: Array
	},
	titulo_principal_hada:{
		type: String
	},
	texto_principal_hada:{
		type: String
	}
});

var Comunion = module.exports = clubhyd.model('Comunion', comunionSchema);

//Get Comunion
module.exports.getComuniones = function(callback, limit){
	Comunion.find(callback).limit(limit);
}

//Add Comunion
module.exports.addComunion = function(comunion, callback){
	Comunion.create(comunion, callback);
}

//Get Comunion
module.exports.getComunion = function(id, callback, limit){
	var query = {_id: id};
	Comunion.find(query, callback).limit(limit);
}

//Get Comunion Select
module.exports.getComunionSelect = function(pretty_url, callback, limit){
	var query = {pretty_url: pretty_url};
	Comunion.find(query, callback).limit(limit);
}

//Update Comunion
module.exports.updateComunion = function(id, comunion, callback){
	var query = {_id: id};
	Comunion.findOneAndUpdate(query, comunion, callback);
}

//Delete Comunion
module.exports.removeComunion = function(id, callback){
	var query = {_id: id};
	Comunion.remove(query, callback);
}