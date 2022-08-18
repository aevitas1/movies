const mongoose = require('mongoose');

const moviesSchema = mongoose.Schema({
    text: String,
})

module.exports = mongoose.model('Movies', moviesSchema)