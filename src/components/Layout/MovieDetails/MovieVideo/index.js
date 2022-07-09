import './index.scss';
import {useContext} from 'react';
import {MovieContext} from '../../../../data/MovieContext';
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../../../data/config";
import NoImage from "../../../../images/no_image.jpg";


const MovieVideo = () => {
    const {
        movieVideo,
        movie
    } = useContext(MovieContext);

    return movieVideo.length !== 0 ? (
        <>
            <div className="video_container">
                <iframe
                    src={`https://www.youtube.com/embed/${movieVideo.results[0].key}
                    ?playlist=${movieVideo.results[0].key}&controls=0&autoplay=1&mute=1&frameborder=0&loop=1`}
                >
                </iframe>
                <div className="gradient"></div>
            </div>
        </>
    ) : (
        <>
            <div className="video_container">
                {movie.backdrop_path ? (
                    <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.backdrop_path}`} alt={`Poster of ${movie.title}`}/>
                ) : (
                    <img src={NoImage} alt="No image available" style={{overflow: 'hidden'}}/>
                )}
            </div>
        </>
    )
}

export default MovieVideo;