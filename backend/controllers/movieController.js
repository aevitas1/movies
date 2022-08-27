const asyncHandler = require('express-async-handler');

const Movies = require('../models/moviesModel');

const mongoose = require('mongoose');

// @desc    Get movies
// @route   GET /movies
// @access  Private
const getMovies = async (req, res) => {
    const movies = await Movies.find()
    res.status(200).json(movies)
};

// @desc    Set movie
// @route   POST /movies
// @access  Private
const setMovie = async (req, res) => {

        const movie = asyncHandler(await Movies.create({
            title: req.body.title,
            id: req.body.id,
            releaseDate: req.body.releaseDate,
        }))
    res.status(200).json(movie)

        // try {
        //     const movie = await Movies.create({
        //         title: req.body.title,
        //         id: req.body.id,
        //         releaseDate: req.body.releaseDate
        //     })
        //     console.log(movie)
        //     res.status(200).json(movie)
        // } catch (error) {
        //     res.status(400).json({error: error.message})
        // }
};


// @desc    Fetch movie
// @route   GET /movies/:id
// @access  Private
const fetchMovie = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No movie found'})
    }

    const movie = await Movie.findById(id)

    if (!movie) {
        return res.status(404).json({error: 'No movie found'})
    }

    res.status(200).json(movie)
}

// @desc    Fetch videos
// @route   UPDATE /movies/:id
// @access  Private
const fetchVideo = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No movie found'})
    }

    const movie = await Movie.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!movie) {
        return res.status(404).json({error: 'No movie found'})
    }

    res.status(200).json(movie)
}


module.exports = {
    getMovies,
    setMovie,
    fetchMovie,
    fetchVideo,
};