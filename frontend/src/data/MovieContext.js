import {createContext, useState} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([]);
    const [movieApi, setMovieApi] = useState([]);

    return (
        <MovieContext.Provider
            value={{
                movies,
                setMovies,
                movieApi,
                setMovieApi
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
}