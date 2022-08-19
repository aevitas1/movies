const asyncHandler = require('express-async-handler');
const {API_KEY, API_URL} = require('./config')
const {setMovie} = require('../controllers/movieController')
const axios = require("axios");


const FetchMovies = asyncHandler(async () => {
    await axios(`${API_URL}trending/movie/week?api_key=${API_KEY}`).then((res) => {
        setMovie(res.data.results[0].title)
    })
})

module.exports =  FetchMovies;