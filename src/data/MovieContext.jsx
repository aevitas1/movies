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
    const [latest, setLatest] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState("");


    const fetchCredits = async (movieId) => {
        const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        return await (await fetch(creditsEndpoint)).json();
    };

    // **************************************************************************
    const FetchMovies = () => {
        useEffect(() => {
            searchTerm.value === ''
                ? axios.get(`${SEARCH_BASE_URL}${searchTerm}&page={page}`)
                : axios.get(`${POPULAR_BASE_URL}&page={page}`).then((res) => {
                    setMovieList(res.data.results);
                    setLoading(false);
                });
        }, []);
    };

    const FetchMovie = async (movieId) => {
        const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
        return await (await fetch(endpoint)).json();
    }

    // **************************************************************************

    useEffect(() => {
        axios.get(`${LATEST_BASE_URL}`).then((res) => {
            setLatest(res.data);
            setLoading(false);
        });
    }, []);

    return (
        <MovieContext.Provider
            value={{
                FetchMovies,
                FetchMovie,
                fetchCredits,
                setSearchTerm,
                searchTerm,
                latest,
                movieList,
                loading,
                text,
                setText,
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
};
