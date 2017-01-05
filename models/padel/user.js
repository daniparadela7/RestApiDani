var mongoose = require('mongoose');
var padel = mongoose.createConnection('mongodb://localhost/padel');
var service = require('./../../services');

var userSchema = mongoose.Schema({
	nombre:{
		type: String,
		required: true
	},
	apellido:{
		type: String,
		required: true
	},
	fecha_nacimiento:{
		type: Date,
		required: true
	},
	telefono:{
		type: String,
		required: true
	},
	genero:{
		type: String,
		required: true
	},
	division:{
		type: String,
		required: true
	},
	imagen:{
		type: Array
	},
	pretty_url:{
		type: String
	},
	email:{
		type: String,
		required: true
	},
	contraseña:{
		type: String,
		required: true
	},
	token:{
		type: String
	},
	pista:{
		type: String
	},
	posicion:{
		type: String
	},
	pareja:{
		type: Array
	},
	partidos_jugados:{
		type: Number
	},
	partidos_ganados:{
		type: Number
	},
	partidos_perdidos:{
		type: Number
	},
	puntos:{
		type: Number
	},
	fecha_registro:{
		type: Date,
		default: Date.now
	}
});

var User = module.exports = padel.model('User', userSchema);


module.exports.getUsers = function(callback, limit){
	User.find(callback).limit(limit);
}


module.exports.addUser = function(user, callback){
	User.create(user, callback);
}


module.exports.getUser = function(id, callback, limit){
	var query = {_id: id};
	User.find(query, callback).limit(limit);
}

module.exports.getUserPerfil = function(pretty_url, callback, limit){
	var query = {pretty_url: pretty_url};
	User.find(query, callback).limit(limit);
}


module.exports.updateUser = function(id, user, callback){
	var query = {_id: id};
	User.findOneAndUpdate(query, user, callback);
}


module.exports.removeUser = function(id, callback){
	var query = {_id: id};
	User.remove(query, callback);
}