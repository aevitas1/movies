import {createContext, useState } from 'react';
import {API_KEY, API_URL} from "./config";
import axios from 'axios';
export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState([]);
    const [movieCredits, setMovieCredits] = useState([]);
    const [movieVideo, setMovieVideo] = useState([]);
    const [recommendedMoviesList, setRecommendedMoviesList] = useState([]);
    const [similarMoviesList, setSimilarMoviesList] = useState([]);
    const [movies, setMovies] = useState([]);
    const [actor, setActor] = useState([]);
    const [actorMovies, setActorMovies] = useState([]);


    // Fetch movie details
    const FetchMovie = async (movieId) => {
        setText('');
        setLoading(true);
        await axios.get(`${API_URL}movie/${movieId}?api_key=${API_KEY}`).then((res) => {
            setMovie(res.data);
        })
        await axios.get(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`).then((res) => {
            setMovieCredits(res.data);
        })
        await axios.get(`${API_URL}movie/${movieId}/videos?api_key=${API_KEY}`).then((res) => {
            setMovieVideo(res.data);
        })
        await axios.get(`${API_URL}movie/${movieId}/recommendations?api_key=${API_KEY}`).then((res) => {
            setRecommendedMoviesList(res.data.results);
        })
        await axios.get(`${API_URL}movie/${movieId}/similar?api_key=${API_KEY}`).then((res) => {
            setSimilarMoviesList(res.data.results);
        })
        setLoading(false);
    }

    // Fetch actor details
    const FetchActor = async (id) => {
        setLoading(true);
        await axios.get(`${API_URL}person/${id}?api_key=${API_KEY}`).then((res) => {
            setActor(res.data)
        })
        await axios.get(`${API_URL}person/${id}/movie_credits?api_key=${API_KEY}`).then((res) => {
            setActorMovies(res.data)
        })
        setLoading(false);
    }

    return (
        <MovieContext.Provider
            value={{
                text,
                setText,
                FetchMovie,
                movie,
                movieCredits,
                movieVideo,
                loading,
                recommendedMoviesList,
                similarMoviesList,
                movies,
                FetchActor,
                actor,
                actorMovies
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
}