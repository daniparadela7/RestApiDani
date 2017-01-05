var mongoose = require('mongoose');
var clubhyd = mongoose.createConnection('mongodb://localhost/clubhyd');

var imagenSchema = mongoose.Schema({
	imagen:{
		type: Array
	},
	album:{
		type: String
	}
});

var Imagen = module.exports = clubhyd.model('Imagen', imagenSchema);

//Get Imagen
module.exports.getImagenes = function(callback, limit){
	Imagen.find(callback).limit(limit);
}

//Add Imagen
module.exports.addImagen = function(imagen, callback){
	Imagen.create(imagen, callback);
}

//Get Imagen
module.exports.getImagen = function(id, callback, limit){
	var query = {_id: id};
	Imagen.find(query, callback).limit(limit);
}

//Get Imagen Select
module.exports.getImagenesSelect = function(album, callback, limit){
	var query = {album: album};
	Imagen.find(query, callback).limit(limit);
}

//Update Imagen
module.exports.updateImagen = function(id, imagen, callback){
	var query = {_id: id};
	Imagen.findOneAndUpdate(query, imagen, callback);
}

//Delete Imagen
module.exports.removeImagen = function(id, callback){
	var query = {_id: id};
	Imagen.remove(query, callback);
}