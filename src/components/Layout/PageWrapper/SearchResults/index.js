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
        const controller = new AbortController()
        axios.get(`${SEARCH_BASE_URL}${text}`,
            {signal: controller.signal
            }).then(res => {
            setMovies(res.data.results);
            setLoading(false);
        }).catch(e => {
            if (controller) return
        })
        return () => {controller.abort();};
    },[text]);

        return (
            <>
                <MovieList loading={loading} movies={movies} />
            </>
        )

}

export default SearchResults;