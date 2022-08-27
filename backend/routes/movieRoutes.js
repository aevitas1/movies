const express = require('express')
const router = express.Router()

const {
    getMovies,
    setMovie,
    fetchMovie,
    fetchVideo,
}
    = require('../controllers/movieController');

// POST a new movie to the database
router.post('/', setMovie)

// GET a list of movies
router.get('/', getMovies)

// GET movie details
router.get('/:id', fetchMovie)

// UPDATE a movie
router.patch('/:id', fetchVideo)


module.exports = router