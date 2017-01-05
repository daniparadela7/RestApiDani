var mongoose = require('mongoose');
var clubhyd = mongoose.createConnection('mongodb://localhost/clubhyd');

var parqueSchema = mongoose.Schema({
	titulo_principal:{
		type: String
	},
	texto_principal:{
		type: String
	},
	precios:{
		type: Array
	},
	imagen:{
		type: Array
	}
});

var Parque = module.exports = clubhyd.model('Parque', parqueSchema);

//Get Parque
module.exports.getParques = function(callback, limit){
	Parque.find(callback).limit(limit);
}

//Add Parque
module.exports.addParque = function(parque, callback){
	Parque.create(parque, callback);
}

//Get Parque
module.exports.getParque = function(id, callback, limit){
	var query = {_id: id};
	Parque.find(query, callback).limit(limit);
}

//Get Parque Select
module.exports.getParqueSelect = function(pretty_url, callback, limit){
	var query = {pretty_url: pretty_url};
	Parque.find(query, callback).limit(limit);
}

//Update Parque
module.exports.updateParque = function(id, parque, callback){
	var query = {_id: id};
	Parque.findOneAndUpdate(query, parque, callback);
}

//Delete Parque
module.exports.removeParque = function(id, callback){
	var query = {_id: id};
	Parque.remove(query, callback);
}