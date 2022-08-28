import axios from 'axios';
import {API_URL, API_KEY} from './config';
import {useEffect} from "react";

// Fetch movies to fill the database with
const fetchMoviesApi = async (req, res) => {
    const movieList = [];

    axios.get(`${API_URL}/trending/all/week?api_key=${API_KEY}`).then((res) => {
        // setMovie({
        //     title: res.data.title,
        // });
        console.log(res.data)

        // axios.post("http://localhost:8000", {
        //     title: res.data.title,

        // })
    })
}

// Post movies to the database
export const PostMovie = () => {
    useEffect(() => {
        const postMovies = async () => {
            try {
                await axios.post("http://localhost:8000/movies", ({
                    title: "Hello this is another test",
                    // id: 2,
                    // releaseDate: "01-01-2025"
                }))
            } catch (error) {
                if (error.response) {
                    console.log(error.response);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("error", error.message);
                }
            }
        }
        postMovies();
    }, [])
}

// Fetch movie list to render from database
export const FetchMovies = (setMovies) => {
        const fetchMovies = async () => {
            try {
                axios.get("http://localhost:8000/movies").then((res) => {
                    setMovies(res.data)
                });
            } catch (error) {
                if (error.response) {
                    console.log(error.response);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("error", error.message);
                }
            }
        };
        fetchMovies();
    return setMovies;
}


