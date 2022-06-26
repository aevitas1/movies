import {useContext} from 'react';
import {MovieContext} from '../MovieContext';
import Loading from '../../components/Loading';
import MovieMainInfo from './MovieMainInfo';
import MovieSecInfo from './MovieSecInfo';
import MovieVideo from './MovieVideo';

function MovieDetails() {
    const {
        loading,
    } = useContext(MovieContext);


    return loading ? (
        <>
            <Loading/>
        </>
    ) : (
        <div className="movie_wrapper">
            <div className="movie_container">
                <MovieVideo/>
                <MovieMainInfo/>
                <MovieSecInfo/>
            </div>
        </div>)
}

export default MovieDetails
