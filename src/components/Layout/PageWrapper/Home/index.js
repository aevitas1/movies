import { useEffect, useState, useContext, useRef, useCallback } from 'react';
import MovieList from '../../MovieList';
import axios from "axios";
import {API_KEY, API_URL} from "../../../../data/config";
import {MovieContext} from "../../../../data/MovieContext";
import Loader from "../../../Loader";
import {filterMovies} from '../../../../data/helpers';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const observer = useRef();
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(false);
    const {
        setText,
    } = useContext(MovieContext);
    const LastMovieRef = useCallback(LastMovieRef => {
        if (loading) return
        if (movies.length === 0) return
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevPage => prevPage + 1)
            }
        })
        if (LastMovieRef) observer.current.observe(LastMovieRef);
    }, [loading, hasMore, movies])

    const TrendingMovies = async () => {
        setText('');
        setLoading(true);
        const newMovies = [];
        await axios.get(`${API_URL}trending/movie/week?api_key=${API_KEY}&page=${page}`).then((res) => {
            setHasMore(res.data.results.length > 0);
            filterMovies(movies, res.data.results, newMovies);
            setMovies(prevMovies => (
                [...prevMovies, ...newMovies]
            ))
            console.log(movies)
        })
        setLoading(false);
    }

    useEffect(() => {
        TrendingMovies();
    }, [page])


    return movies.length == 0 ? (
        <>
            <Loader/>
        </>
    ) :(
        <>
            <MovieList loading={loading} movies={movies} />
            <div ref={LastMovieRef}></div>
        </>
    )
}

export default Home;