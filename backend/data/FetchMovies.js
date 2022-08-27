const axios = require('axios');
const { API_URL, API_KEY } = require('./config');
const movies = [];
const { setMovie } = require('../routes/movieRoutes')

const fetchMovies = async (req, res) => {
    axios.get(`${API_URL}/trending/all/week?api_key=${API_KEY}`).then((res) => {
        setMovie({
            title: res.data.title,
        });
        console.log(res.data)

        // axios.post("http://localhost:8000", {
        //     title: res.data.title,

        // })
    })
}

module.exports = { fetchMovies }