var mongoose = require('mongoose');
var clubhyd = mongoose.createConnection('mongodb://localhost/clubhyd');

var albumSchema = mongoose.Schema({
	nombre:{
		type: String
	},
	imagen:{
		type: Array
	},
	pretty_url:{
		type: String
	}
});

var Album = module.exports = clubhyd.model('Album', albumSchema);

//Get Album
module.exports.getAlbums = function(callback, limit){
	Album.find(callback).limit(limit);
}

//Add Album
module.exports.addAlbum = function(album, callback){
	Album.create(album, callback);
}

//Get Album
module.exports.getAlbum = function(id, callback, limit){
	var query = {_id: id};
	Album.find(query, callback).limit(limit);
}

//Get Album Select
module.exports.getAlbumSelect = function(pretty_url, callback, limit){
	var query = {pretty_url: pretty_url};
	Album.find(query, callback).limit(limit);
}

//Update Album
module.exports.updateAlbum = function(id, album, callback){
	var query = {_id: id};
	Album.findOneAndUpdate(query, album, callback);
}

//Delete Album
module.exports.removeAlbum = function(id, callback){
	var query = {_id: id};
	Album.remove(query, callback);
}