const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    id: mongoose.Schema.Types.ObjectId,
    movie_id: Number,
    media_type: String,
    original_language: String,
    overview: String,
    poster_path: String,
    popularity: Number,
    vote_average: Number,
    vote_count: Number,
    release_date: Date,
    video: String,
});

module.exports = mongoose.model('Movies', movieSchema);