import './index.scss';
import { useState} from 'react';
import MovieList from '../../MovieList';



const Home = () => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);


    console.log(movies)
    return (
        <>
            <h1>Hi</h1>
        <MovieList loading={loading} movies={movies} />
        </>
    )
}

export default Home;