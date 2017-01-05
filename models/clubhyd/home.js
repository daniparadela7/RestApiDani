var mongoose = require('mongoose');
var clubhyd = mongoose.createConnection('mongodb://localhost/clubhyd');

var homeSchema = mongoose.Schema({
	titulo:{
		type: String
	},
	texto:{
		type: String
	},
	imagen:{
		type: Array
	},
	seccion:{
		type: String
	},
	pretty_url:{
		type: String
	},
	orden:{
		type: String
	}
});

var Home = module.exports = clubhyd.model('Home', homeSchema);

//Get Home
module.exports.getHomes = function(callback, limit){
	Home.find(callback).limit(limit);
}

//Add Home
module.exports.addHome = function(home, callback){
	Home.create(home, callback);
}

//Get Home
module.exports.getHome = function(id, callback, limit){
	var query = {_id: id};
	Home.find(query, callback).limit(limit);
}

//Get Home Select
module.exports.getHomeSelect = function(pretty_url, callback, limit){
	var query = {pretty_url: pretty_url};
	Home.find(query, callback).limit(limit);
}

//Update Home
module.exports.updateHome = function(id, home, callback){
	var query = {_id: id};
	Home.findOneAndUpdate(query, home, callback);
}

//Delete Home
module.exports.removeHome = function(id, callback){
	var query = {_id: id};
	Home.remove(query, callback);
}