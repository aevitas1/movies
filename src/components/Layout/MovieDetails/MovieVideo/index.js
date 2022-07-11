import './index.scss';
import {useContext} from 'react';
import {MovieContext} from '../../../../data/MovieContext';
import MovieBackdrop from "../MovieBackdrop";

const MovieVideo = () => {
    const {
        movieVideo,
        movie
    } = useContext(MovieContext);


    return movieVideo.results.length !== 0 ? (
        <>
            <div className="video_container">
                <div className="gradient_top"></div>
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${movieVideo.results[0].key}
                    ?playlist=${movieVideo.results[0].key}&controls=0&autoplay=1&mute=1&frameborder=0&loop=1`}
                >
                </iframe>
                <div className="gradient_bottom"></div>
            </div>
        </>
    ) : (
        <>
            <MovieBackdrop/>
        </>
    )
}

export default MovieVideo;