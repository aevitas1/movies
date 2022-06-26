import {useContext} from 'react';
import {MovieContext} from '../MovieContext';

function MovieVideo() {
    const {
        movieVideo,
    } = useContext(MovieContext);

    console.log(`https://www.youtube.com/embed/${movieVideo.results[0].key}
                    ?playlist=${movieVideo.results[0].key}&controls=0&autoplay=1&mute=1`)
    return (
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
    )
}

export default MovieVideo;