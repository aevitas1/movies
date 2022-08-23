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
router.post('/').post(setMovie)

// GET a list of movies
router.post('/').get(getMovies)

// GET movie details
router.post('/:id').get(fetchMovie)

// UPDATE a movie
router.route('/:id').patch(fetchVideo)


module.exports = router