var mongoose = require('mongoose');
var padel = mongoose.createConnection('mongodb://localhost/padel');

var notificacionSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	tipo:{
		type: Array,
		required: true

	},
	estado:{
		type: String,
		required: true

	},
	mensaje:{
		type: String,
		required: true

	},
	envia:{
		type: String,
		required: true
	},
	recibe:{
		type: String,
		required: true
	},
	leido:{
		type: Boolean,
		required: true
	},
	fecha_registro:{
		type: Date,
		default: Date.now
	}
});

var Notificacion = module.exports = padel.model('Notificacion', notificacionSchema);


module.exports.getNotificaciones = function(callback, limit){
	Notificacion.find(callback).limit(limit);
}


module.exports.addNotificacion = function(notificacion, callback){
	Notificacion.create(notificacion, callback);
}

module.exports.getNotificacionesUsuario = function(id, callback, limit){
	var query = {recibe: id};
	Notificacion.find(query, callback).limit(limit);
}

module.exports.getNotificacion = function(id, callback, limit){
	var query = {_id: id};
	Notificacion.find(query, callback).limit(limit);
}


module.exports.updateNotificacion = function(id, notificacion, callback){
	var query = {_id: id};
	Notificacion.findOneAndUpdate(query, notificacion, callback);
}


module.exports.removeNotificacion = function(id, callback){
	var query = {_id: id};
	Notificacion.remove(query, callback);
}