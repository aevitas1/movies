import './index.scss';
import {IMAGE_BASE_URL} from "../../../../data/config";
import {useContext} from 'react';
import {MovieContext} from '../../../../data/MovieContext';
import NoImage from "../../../../images/no_image.jpg";

const MovieBackdrop = () => {
    const {
        movie
    } = useContext(MovieContext);

    return (
        <>
            <div className="backdrop_container">
                <div className="gradient_top"></div>
                {movie.backdrop_path ? (
                    <img src={`${IMAGE_BASE_URL}original/${movie.backdrop_path}`} alt={`Poster of ${movie.title}`}/>
                ) : (
                    <img src={NoImage} alt="No poster available"/>
                )}
                <div className="gradient_bottom"></div>
            </div>

        </>
    )
}

export default MovieBackdrop;