var mongoose = require('mongoose');
var padel = mongoose.createConnection('mongodb://localhost/padel');

var parejaSchema = mongoose.Schema({
	jugador1:{
		type: String,
		required: true
	},
	jugador2:{
		type: String,
		required: true
	},
	aceptado:{
		type: Boolean,
		required: true
	}
});

var Pareja = module.exports = padel.model('Pareja', parejaSchema);


module.exports.getParejas = function(callback, limit){
	Pareja.find(callback).limit(limit);
}


module.exports.addPareja = function(pareja, callback){
	Pareja.create(pareja, callback);
}


module.exports.getPareja = function(id, callback, limit){
	var query = {_id: id};
	Pareja.find(query, callback).limit(limit);
}

module.exports.updatePareja = function(id, pareja, callback){
	var query = {_id: id};
	Pareja.findOneAndUpdate(query, pareja, callback);
}


module.exports.removePareja = function(id, callback){
	var query = {_id: id};
	Pareja.remove(query, callback);
}