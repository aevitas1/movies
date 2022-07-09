import './index.scss';
import { useEffect, useState, useContext, useRef, useCallback } from 'react';
import MovieList from '../../MovieList';
import axios from "axios";
import {API_KEY, API_URL} from "../../../../data/config";
import {MovieContext} from "../../../../data/MovieContext";
import Loader from "../../../Loader";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const observer = useRef();
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(false);
    const {
        setText,
    } = useContext(MovieContext);
    const LastMovieRef = useCallback(movieRef => {
        if (loading) return
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevPage => prevPage + 1)
                TrendingMovies();
                console.log(movies)
            }
        })
        if (movieRef) observer.current.observe(movieRef);
    }, [loading])

        const TrendingMovies = async () => {
            setText('');
            setLoading(true);
            await axios.get(`${API_URL}trending/movie/week?api_key=${API_KEY}&page=${page}`).then((res) => {
                console.log(res.data)
                setMovies(prevMovies => {
                    return [...new Set([...prevMovies, ...res.data.results])];
                });
                setHasMore(res.data.results.length > 0);
            })
            setLoading(false);
        }

        useEffect(() => {
            TrendingMovies(page);
        }, [])


    return loading ? (
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