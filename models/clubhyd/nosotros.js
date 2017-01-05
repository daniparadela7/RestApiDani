var mongoose = require('mongoose');
var clubhyd = mongoose.createConnection('mongodb://localhost/clubhyd');

var nosotrosSchema = mongoose.Schema({
	nombre:{
		type: String
	},
	funcion:{
		type: String
	},
	descripcion:{
		type: String
	},
	imagen:{
		type: Array
	},
	pretty_url:{
		type: String
	},
	fecha_registro:{
		type: Date,
		default: Date.now
	}
});

var Nosotros = module.exports = clubhyd.model('Nosotros', nosotrosSchema);

//Get Nosotros
module.exports.getNosotros = function(callback, limit){
	Nosotros.find(callback).limit(limit);
}

//Add Nosotros
module.exports.addNosotros = function(nosotros, callback){
	Nosotros.create(nosotros, callback);
}

//Get Nosotros
module.exports.getPersonal = function(id, callback, limit){
	var query = {_id: id};
	Nosotros.find(query, callback).limit(limit);
}

//Get Nosotros Select
module.exports.getNosotrosSelect = function(pretty_url, callback, limit){
	var query = {pretty_url: pretty_url};
	Nosotros.find(query, callback).limit(limit);
}

//Update Nosotros
module.exports.updateNosotros = function(id, nosotros, callback){
	var query = {_id: id};
	Nosotros.findOneAndUpdate(query, nosotros, callback);
}

//Delete Nosotros
module.exports.removeNosotros = function(id, callback){
	var query = {_id: id};
	Nosotros.remove(query, callback);
}