import './index.scss';
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../../../data/config";
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
                {movie.backdrop_path ? (
                    <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`} alt={`Poster of ${movie.title}`}/>
                ) : (
                    <img src={NoImage} alt="No image available" style={{overflow: 'hidden'}}/>
                )}
            </div>
        </>
    )
}

export default MovieBackdrop;