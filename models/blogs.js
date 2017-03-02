var mongoose = require('mongoose');

var blogSchema = mongoose.Schema({
	title: String,
	description: String,
	comments: Array,
	likes: 0
});

module.exports = mongoose.model('Blog', blogSchema);