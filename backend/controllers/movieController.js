const Movies = require('../models/moviesModel');
const mongoose = require('mongoose');

// @desc    Get movies
// @route   GET /movies
// @access  Private
const getMovies = async (req, res) => {
    const movies = await Movies.find()
    res.status(200).json(movies)
}

// @desc    Set movie
// @route   POST /movies
// @access  Private
const setMovie = async (req, res) => {
    try {
        const movie = await Movies.create({
            //Media type of movie
            adult: req.body.adult,
            backdrop_path: req.body.backdrop_path,
            genre_ids: req.body.genre_ids,
            _id: req.body.id,
            media_type: req.body.media_type,
            original_language: req.body.original_language,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            release_date: req.body.release_date,
            title: req.body.title,
            video: req.body.video,
            vote_average: req.body.vote_average,
            vote_counter: req.body.vote_counter,
            //Added for media type of tv
            name: req.body.name,
            origin_country: req.body.origin_country,
            first_air_date: req.body.first_air_date,
        })
        res.status(200).json(movie)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// @desc    Fetch movie
// @route   GET /movies/:id
// @access  Private
const fetchMovie = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No movie found' })
    }

    const movie = await Movie.findById(id)

    if (!movie) {
        return res.status(404).json({ error: 'No movie found' })
    }

    res.status(200).json(movie)
}

// @desc    Fetch videos
// @route   UPDATE /movies/:id
// @access  Private
const fetchVideo = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No movie found' })
    }

    const movie = await Movie.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!movie) {
        return res.status(404).json({ error: 'No movie found' })
    }

    res.status(200).json(movie)
}


module.exports = {
    getMovies,
    setMovie,
    fetchMovie,
    fetchVideo,
};