import React from 'react';
import {useContext} from "react";
import MovieItem from "./MovieItem";
import {MovieContext} from "./MovieContext";

function MovieList() {
    const {
        movieList,
        FetchMovies,
        loading,
    } = useContext(MovieContext);

    FetchMovies();
    return loading ? (
        ''
    ) : (
        <>
            {movieList.map((item) => (
                <MovieItem key={item.id} item={item}/>
            ))}
        </>
    )
}

export default MovieList;
