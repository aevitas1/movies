const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')
const port = 6000;
const FetchMovies = require('./data/FetchMovies');
const movieRoutes = require('./routes/movieRoutes')

connectDB();
FetchMovies();
const app = express();

app.use((req, res, next) => {
    next()
});

app.use(express.json());
app.use('/',movieRoutes);

app.listen(port, () => console.log(`Server started on: ${port}` ))