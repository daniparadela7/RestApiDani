var mongoose = require('mongoose');
var padel = mongoose.createConnection('mongodb://localhost/padel');

var reservaSchema = mongoose.Schema({
	title:{
		type: String,
		default: 'Reservado'
	},
	start:{
		type: Date,
		required: true

	},
	end:{
		type: Date,
		required: true

	},
	pista:{
		type: String,
		required: true
	},
	usuario:{
		type: String,
		required: true
	},
	color:{
		type: String,
		default: '#B5232D'
	},
	fecha_registro:{
		type: Date,
		default: Date.now
	}
});

var Reserva = module.exports = padel.model('Reserva', reservaSchema);


module.exports.getReservas = function(callback, limit){
	Reserva.find(callback).limit(limit);
}


module.exports.addReserva = function(reserva, callback){
	Reserva.create(reserva, callback);
}


module.exports.getReserva = function(id, callback, limit){
	var query = {_id: id};
	Reserva.find(query, callback).limit(limit);
}


module.exports.updateReserva = function(id, reserva, callback){
	var query = {_id: id};
	Reserva.findOneAndUpdate(query, reserva, callback);
}


module.exports.removeReserva = function(id, callback){
	var query = {_id: id};
	Reserva.remove(query, callback);
}