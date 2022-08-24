const express = require('express');
const connectDB = require('./config/db')
const port = 8000;
// const FetchMovies = require('./data/FetchMovies');
const movieRoutes = require('./routes/movieRoutes')
const dotenv = require('dotenv').config()
const cors = require('cors')

connectDB();
// FetchMovies();
const app = express();

app.use(express.json());

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept")
//     next();
// });
app.use(cors())

app.use('/movies', movieRoutes);


app.listen(port, () => console.log(`Server started on: ${port}`))
