const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')
const port = process.env.PORT || 6000;
const FetchMovies = require('./data/FetchMovies');

connectDB();
FetchMovies();
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use('/', require('./routes/movieRoutes'));

app.listen(port, () => console.log(`Server started on ${port}`))