const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movieSchema = new Schema({
    adult: Boolean,
    backdrop_path: String,
    genre_ids: [{
        type: Number,
        default: undefined,
    }],
    _id: Number,
    media_type: String,
    original_language: String,
    overview: String,
    poster_path: String,
    release_date: String,
    title: String,
    video: String,
    vote_average: Number,
    vote_counter: Number,
    name: String,
    origin_country: [{
        type: String,
        default: undefined,
    }],
    first_air_date: String,
    });

module.exports = mongoose.model('Movies', movieSchema);