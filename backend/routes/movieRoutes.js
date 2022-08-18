const express = require('express')
const router = express.Router()

const {
    getMovies,
    setMovie,
    fetchMovie,
    fetchVideo,
    fetchRecommendations,
    fetchSimilar,
    fetchCrew,
    fetchActor}
    = require('../controllers/movieController');

router.route('/movies').get(getMovies).post(setMovie)

router.route('/movie/:id')
    .get(fetchMovie)
    .get(fetchVideo)
    .get(fetchRecommendations)
    .get(fetchSimilar)
    .get(fetchCrew)

router.get('/actors/id', fetchActor);

module.exports = router