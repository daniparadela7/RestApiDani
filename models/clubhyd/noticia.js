var mongoose = require('mongoose');
var clubhyd = mongoose.createConnection('mongodb://localhost/clubhyd');

var noticiaSchema = mongoose.Schema({
	titulo:{
		type: String
	},
	extracto:{
		type: String
	},
	contenido:{
		type: String
	},
	imagen:{
		type: Array
	},
	pretty_url:{
		type: String
	},
	fecha_noticia:{
		type: Date,
		default: Date.now
	}
});

var Noticia = module.exports = clubhyd.model('Noticia', noticiaSchema);

//Get Noticias
module.exports.getNoticias = function(callback, limit){
	Noticia.find(callback).limit(limit);
}

//Add Noticia
module.exports.addNoticia = function(noticia, callback){
	Noticia.create(noticia, callback);
}

//Get Noticia
module.exports.getNoticia = function(id, callback, limit){
	var query = {_id: id};
	Noticia.find(query, callback).limit(limit);
}

//Get Noticia Select
module.exports.getNoticiaSelect = function(pretty_url, callback, limit){
	var query = {pretty_url: pretty_url};
	Noticia.find(query, callback).limit(limit);
}

//Update Noticia
module.exports.updateNoticia = function(id, noticia, callback){
	var query = {_id: id};
	Noticia.findOneAndUpdate(query, noticia, callback);
}

//Delete Noticia
module.exports.removeNoticia = function(id, callback){
	var query = {_id: id};
	Noticia.remove(query, callback);
}