const express = require('express');
const connectDB = require('./config/db')
const port = 8000;

const movieRoutes = require('./routes/movieRoutes')
const dotenv = require('dotenv').config()
const cors = require('cors');
const { fetchMovies } = require('./data/fetchMovies');

connectDB();

const app = express();

app.use(express.json());

app.use(cors())

app.use('/movies', movieRoutes);


app.listen(port, () => console.log(`Server started on: ${port}`))

// fetchMovies()