import './index.scss';
import {useContext, useEffect, useState} from 'react';
import {MovieContext} from '../../../../data/MovieContext';
import axios from 'axios';
import {SEARCH_BASE_URL} from "../../../../data/config";
import MovieList from '../../MovieList';

const SearchResults = () => {
        const {
            text,
        } = useContext(MovieContext);
        const [loading, setLoading] = useState(true);
        const [movies, setMovies] = useState([]);

            useEffect(() => {
            axios.get(`${SEARCH_BASE_URL}${text}`).then((res) => {
                setMovies(res.data.results);
                setLoading(false);
            })
            },[text]);

        return (
            <>
                <MovieList loading={loading} movies={movies} />
            </>
        )

}

export default SearchResults;