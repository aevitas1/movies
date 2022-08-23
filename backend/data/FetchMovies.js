const asyncHandler = require('express-async-handler');
const {API_KEY, API_URL} = require('./config')
const {setMovie} = require('../controllers/movieController')
const axios = require("axios");


const FetchMovies = asyncHandler(async () => {
    // await axios(`${API_URL}trending/movie/week?api_key=${API_KEY}`).then((res) => {
    console.log('test')
        setMovie({
            title: "Harry Potter",
            id: "123456",
            releaseDate: "01-01-2020",
        })
    await axios.post("/movies", setMovie)
    // })
})

module.exports =  FetchMovies;