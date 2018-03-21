var mongoose = require('mongoose'); 

var PostSchema = new mongoose.Schema({
    name: String, 
    content: String
})

mongoose.model('Post', PostSchema);

module.exports = mongoose.model('Post'); 