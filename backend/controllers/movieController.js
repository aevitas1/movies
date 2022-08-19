const asyncHandler = require('express-async-handler');

const Movies = require('../models/moviesModel');

// @desc    Get movies
// @route   GET /movies
// @access  Private
const getMovies = asyncHandler(async (req, res) => {
    const movies = await Movies.find()

    res.status(200).json(movies)
})

// @desc    Set movie
// @route   POST /movies
// @access  Private
const setMovie = asyncHandler(async (req, res) => {
    const movie = await Movies.create({

    })
    res.status(200).json(movie)
})

// ********** Get information for a singular movie **********

// @desc    Fetch movie
// @route   GET /movie/:id
// @access  Private
const fetchMovie = asyncHandler(async (req, res) => {
    res.status(200).json({Message: `Fetch movie ${req.params.id}`})
})

// @desc    Fetch images
// @route   GET /movies/:id
// @access  Private
const fetchVideo = asyncHandler(async (req, res) => {
    res.status(200).json({Message: 'Fetch video link'})
})

// @desc    Fetch recommendations
// @route   GET /movies/:id
// @access  Private
const fetchRecommendations = asyncHandler(async (req, res) => {
    res.status(200).json({Message: 'Fetch recommendations'})
})

// @desc    Fetch similar
// @route   GET /movies/:id
// @access  Private
const fetchSimilar = asyncHandler(async (req, res) => {
    res.status(200).json({Message: 'Fetch similar'})
})

// @desc    Fetch crew
// @route   GET /movies/:id
// @access  Private
const fetchCrew = asyncHandler(async (req, res) => {
    res.status(200).json({Message: 'Fetch crew'})
})


// ********** Get information for an actor **********
// @desc    Fetch actors
// @route   GET /actors/:id
// @access  Private
const fetchActor = asyncHandler(async (req, res) => {
    res.status(200).json({Message: 'Fetch actor information'})
})

module.exports = {
    getMovies,
    setMovie,
    fetchMovie,
    fetchVideo,
    fetchRecommendations,
    fetchSimilar,
    fetchCrew,
    fetchActor
};