import './index.scss';
import {useContext} from 'react';
import {MovieContext} from '../../../data/MovieContext';
import Loader from '../../Loader';
import MovieBottomInfo from "./MovieBottomInfo";
import MovieVideo from "./MovieVideo";
import MovieTopInfo from "./MovieTopInfo";
import MovieBackdrop from './MovieBackdrop';

const MovieDetails = () => {

    const {
        loading,
    } = useContext(MovieContext);

    return loading ? (
        <>
        <Loader />
        </>
    ) : (
        <div className="movie_wrapper">
            <div className="movie_container">
                <div className="top">
                    <MovieTopInfo />
                    <MovieBackdrop />
                </div>
                <div className="bottom">
                    <MovieBottomInfo />
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;