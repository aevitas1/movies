const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    id: mongoose.Schema.Types.ObjectId,
    releaseDate: Date,
    video: String,
});

module.exports = mongoose.model('Movies', movieSchema);