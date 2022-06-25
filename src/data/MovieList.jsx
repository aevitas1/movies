import React from 'react';
import {useContext} from "react";
import MovieItem from "./MovieItem";
import {MovieContext} from "./MovieContext";
import Loading from '../components/Loading';

function MovieList() {
    const {
        movieList,
        FetchMovies,
        loading,
    } = useContext(MovieContext);

    FetchMovies();
    return loading && movieList.length > 0 ? (
        <Loading/>
    ) : (
        <>
            {movieList.map((item) => (
                <MovieItem key={item.id} item={item}/>
            ))}
        </>
    )
}

export default MovieList;
