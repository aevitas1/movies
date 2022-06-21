import React from 'react';
import { createContext, useState } from "react";
import { useEffect } from "react";
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
    const [searchResults, setSearchResult] = useState([]);
    const [latest, setLatest] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovie = async (movieId) => {
        const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
        return await (await fetch(endpoint)).json();
    };

    const fetchCredits = async (movieId) => {
        const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        return await (await fetch(creditsEndpoint)).json();
    };
    // **************************************************************************
    const FetchMovies = () => {
        useEffect((page) => {
            searchTerm
                ? axios.get(`${SEARCH_BASE_URL}${searchTerm}&page=${page}`)
                : axios.get(`${POPULAR_BASE_URL}&page={page}`).then((res) => {
                    setMovieList(res.data.results);
                    setLoading(false);
                });
        }, []);
    };

    const fetchMovies = async (page) => {
        const endpoint = searchTerm
            ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
            : `${POPULAR_BASE_URL}&page={page}`
        const data = await (await fetch(endpoint)).json()
        setSearchResult(data)
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
                fetchMovie,
                fetchCredits,
                setSearchTerm,
                latest,
                searchResults,
                movieList,
                loading,
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
};
