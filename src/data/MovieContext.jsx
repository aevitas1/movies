import React from 'react';
import {createContext, useState} from "react";
import {useEffect} from "react";
import {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    LATEST_BASE_URL,
    API_URL,
    API_KEY,
} from "./config";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState("");
    const [movie, setMovie] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [movieCredits, setMovieCredits] = useState([]);
    const [movieVideo, setMovieVideo] = useState([]);
    const [movieImages, setMovieImages] = useState([]);


    const fetchCredits = async (movieId) => {
        const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        return await (await fetch(creditsEndpoint)).json();
    };

    // **************************************************************************
    // Fetch movies to fill the homepage
    const FetchMovies = (page) => {
        useEffect(() => {
            setLoading(true);
            searchTerm.value === ''
                ? axios.get(`${SEARCH_BASE_URL}${searchTerm}&page={page}`)
                : axios.get(`${POPULAR_BASE_URL}&page=${page}`).then((res) => {
                    setMovieList(res.data.results);
                    setLoading(false);
                });
        }, []);
    };

    // Fetch movie details
    const FetchMovie = async (movieId) => {
        console.log('this works')
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

    const UpComingMovies = () => {
        useEffect(() => {
            setLoading(true);
            axios.get(`${API_URL}movie/upcoming?api_key=${API_KEY}`).then((res) => {
                setUpcoming(res.data.results);
                setLoading(false);
            })
        }, [])
    }

    // **************************************************************************


    return (
        <MovieContext.Provider
            value={{
                FetchMovies,
                FetchMovie,
                fetchCredits,
                setSearchTerm,
                searchTerm,
                movieList,
                loading,
                text,
                setText,
                movie,
                upcoming,
                UpComingMovies,
                movieCredits,
                movieVideo,
                movieImages,
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
};
