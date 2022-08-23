const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    id: Number,
    // { type: Number, unique: true },
    releaseDate: Date,
    video: String,
});

module.exports = mongoose.model('Movie', movieSchema);