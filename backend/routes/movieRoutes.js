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

router.get('/movies', getMovies);
router.get('/actors/id', fetchActor);

router.route('/movie/:id')
    .post(setMovie)
    .get(fetchMovie)
    .get(fetchVideo)
    .get(fetchRecommendations)
    .get(fetchSimilar)
    .get(fetchCrew)

module.exports = router