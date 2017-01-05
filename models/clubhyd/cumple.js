var mongoose = require('mongoose');
var clubhyd = mongoose.createConnection('mongodb://localhost/clubhyd');

var cumpleSchema = mongoose.Schema({
	titulo_principal_hada:{
		type: String
	},
	texto_principal_hada:{
		type: String
	},
	menu1_hada:{
		type: Array
	},
	menu2_hada:{
		type: Array
	},
	menu3_hada:{
		type: Array
	},
	apartados_hada:{
		type: Array
	},
	titulo_principal_duende:{
		type: String
	},
	texto_principal_duende:{
		type: String
	},
	menu1_duende:{
		type: Array
	},
	menu2_duende:{
		type: Array
	},
	menu3_duende:{
		type: Array
	},
	apartados_duende:{
		type: Array
	}
});

var Cumple = module.exports = clubhyd.model('Cumple', cumpleSchema);

//Get Cumple
module.exports.getCumples = function(callback, limit){
	Cumple.find(callback).limit(limit);
}

//Add Cumple
module.exports.addCumple = function(cumple, callback){
	Cumple.create(cumple, callback);
}

//Get Cumple
module.exports.getCumple = function(id, callback, limit){
	var query = {_id: id};
	Cumple.find(query, callback).limit(limit);
}

//Get Cumple Select
module.exports.getCumpleSelect = function(pretty_url, callback, limit){
	var query = {pretty_url: pretty_url};
	Cumple.find(query, callback).limit(limit);
}

//Update Cumple
module.exports.updateCumple = function(id, cumple, callback){
	var query = {_id: id};
	Cumple.findOneAndUpdate(query, cumple, callback);
}

//Delete Cumple
module.exports.removeCumple = function(id, callback){
	var query = {_id: id};
	Cumple.remove(query, callback);
}