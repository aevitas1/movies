import {MovieContext} from "../data/MovieContext";
import {useContext} from "react";
import NoImage from "../images/no_image.jpg";
import {IMAGE_BASE_URL, POSTER_SIZE} from "../data/config";

function New(item) {
    const {latest} = useContext(MovieContext);
    console.log(latest);
    return (
        <div className="new_wrapper">
            <div className="movie_grid">
                <div className="card_wrapper">
                    <div className="card_body new_movie">
                        <img
                            src={
                                latest.poster_path
                                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${latest.poster_path}`
                                    : NoImage
                            }
                            clickable="false"
                            alt={`Poster of ${latest.title}`}
                        />
                        <div data-rating={latest.vote_average} className="card_rating"></div>
                        <div className="movie_title">{latest.title}</div>
                        <div className="movie_descr">{latest.overview}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default New;