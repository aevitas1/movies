import './index.scss';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {
    API_KEY,
    POPULAR_BASE_URL
} from '../../../../data/config';
import MovieList from '../../MovieList';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const FetchMovies = () => {
        useEffect(() => {
            setLoading(true);
            axios.get(`${POPULAR_BASE_URL}/&page=${page}`).then((res) => {
                setMovies(res.data.results);
                setLoading(false);
            })
        }, [])
    }

    FetchMovies();
    console.log(movies)
    return (
        <>
        <MovieList loading={loading} movies={movies} />
        </>
    )
}

export default Home;