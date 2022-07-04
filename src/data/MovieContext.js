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

    // Fetch movie details
    const FetchMovie = async (movieId) => {
        console.log('this works')
        setText('');
        setLoading(true);
        await axios.get(`${API_URL}movie/${movieId}?api_key=${API_KEY}`).then((res) => {
            setMovie(res.data);
            console.log(res.data, loading)
            axios.get(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`).then((res) => {
                setMovieCredits(res.data)
                console.log(movieCredits, 'credits')
            })
            axios.get(`${API_URL}movie/${movieId}/videos?api_key=${API_KEY}`).then((res) => {
                setMovieVideo(res.data)
                setLoading(false)
                console.log(movieVideo, 'video')
            })
            axios.get(`${API_URL}movie/${movieId}/images?api_key=${API_KEY}`).then((res) => {
                setMovieImages(res.data)
                setLoading(false)
                console.log(movieImages, 'images')
            })
        });
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
                loading
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
}