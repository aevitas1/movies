import {MovieContext} from "../data/MovieContext";
import {useContext} from "react";
import NoImage from "../images/no_image.jpg";
import {IMAGE_BASE_URL, POSTER_SIZE} from "../data/config";
import {Link} from 'react-router-dom';
import {convertDate} from '../data/helpers';

function Upcoming() {

    const {
        upcoming,
        UpComingMovies,
        FetchMovie,
    } = useContext(MovieContext);
    UpComingMovies();
    console.log(upcoming, 'coming');
    return (
        <div className="new_wrapper">
            <div className="movie_grid">
                {upcoming.map((item) => (
                    <Link to={`/movie/` + `${item.id}`} onClick={() => FetchMovie(item.id)}>
                        <div className="card_wrapper">
                            <div className="card_body new_movie">
                                <img
                                    src={
                                        item.poster_path
                                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${item.poster_path}`
                                            : NoImage
                                    }
                                    clickable="false"
                                    alt={`Poster of ${item.title}`}
                                />
                                <div data-rating={item.vote_average} className="card_rating"></div>
                            </div>
                            {convertDate(item.release_date)}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Upcoming;