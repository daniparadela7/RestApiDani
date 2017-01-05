var mongoose = require('mongoose');
var clubhyd = mongoose.createConnection('mongodb://localhost/clubhyd');
var service = require('./../../services');

var userSchema = mongoose.Schema({
	nombre:{
		type: String,
		required: true
	},
	apellido:{
		type: String,
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
	fecha_registro:{
		type: Date,
		default: Date.now
	}
});

var User = module.exports = clubhyd.model('User', userSchema);


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