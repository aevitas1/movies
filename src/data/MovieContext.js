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
    const [movieImages, setMovieImages] = useState([]);
    const [recommendedMoviesList, setRecommendedMoviesList] = useState([]);
    const [similarMoviesList, setSimilarMoviesList] = useState([]);

    // Fetch movie details
    const FetchMovie = async (movieId) => {
        console.log('this works')
        setText('');
        setLoading(true);
        await axios.get(`${API_URL}movie/${movieId}?api_key=${API_KEY}`).then((res) => {
            setMovie(res.data);
        })
        await axios.get(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`).then((res) => {
            setMovieCredits(res.data);
        })
        setLoading(true);
        await axios.get(`${API_URL}movie/${movieId}/videos?api_key=${API_KEY}`).then((res) => {
            setMovieVideo(res.data);
        })
        setLoading(true);
        await axios.get(`${API_URL}movie/${movieId}/images?api_key=${API_KEY}`).then((res) => {
            setMovieImages(res.data);
        })
        await axios.get(`${API_URL}movie/${movieId}/recommendations?api_key=${API_KEY}`).then((res) => {
            setRecommendedMoviesList(res.data.results);
        })
        await axios.get(`${API_URL}movie/${movieId}/similar?api_key=${API_KEY}`).then((res) => {
            setSimilarMoviesList(res.data.results);
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
                movieImages,
                loading,
                recommendedMoviesList,
                similarMoviesList
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
}