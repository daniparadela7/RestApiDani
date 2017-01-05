var mongoose = require('mongoose');
var clubhyd = mongoose.createConnection('mongodb://localhost/clubhyd');

var cafeteriaSchema = mongoose.Schema({
	titulo_principal:{
		type: String
	},
	texto_principal:{
		type: String
	},
	horario:{
		type: String
	},
	imagen:{
		type: Array
	}
});

var Cafeteria = module.exports = clubhyd.model('Cafeteria', cafeteriaSchema);

//Get Cafeteria
module.exports.getCafeteria = function(callback, limit){
	Cafeteria.find(callback).limit(limit);
}

//Add Cafeteria
module.exports.addCafeteria = function(cafeteria, callback){
	Cafeteria.create(cafeteria, callback);
}

//Get Cafeteria
module.exports.getFotoCafeteria = function(id, callback, limit){
	var query = {_id: id};
	Cafeteria.find(query, callback).limit(limit);
}

//Get Cafeteria Select
module.exports.getCafeteriaSelect = function(pretty_url, callback, limit){
	var query = {pretty_url: pretty_url};
	Cafeteria.find(query, callback).limit(limit);
}

//Update Cafeteria
module.exports.updateCafeteria = function(id, cafeteria, callback){
	var query = {_id: id};
	Cafeteria.findOneAndUpdate(query, cafeteria, callback);
}

//Delete Cafeteria
module.exports.removeCafeteria = function(id, callback){
	var query = {_id: id};
	Cafeteria.remove(query, callback);
}