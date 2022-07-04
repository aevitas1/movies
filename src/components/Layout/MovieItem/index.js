import './index.scss';
import NoImage from '../../../images/no_image.jpg';
import {Link} from 'react-router-dom';
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../../data/config";
import {useContext} from 'react';
import {MovieContext} from '../../../data/MovieContext';

const MovieItem = (item) => {
   const {
       FetchMovie
   } = useContext(MovieContext);

    return (
        <div className="card_wrapper">
            <Link to ={`/movie/` + `${item.item.id}`} onClick={() => FetchMovie(item.item.id)}>
                <div className="card_body">
                    <div className="card_overlay">
                        <img src={
                            item.item.poster_path ?
                                `${IMAGE_BASE_URL}${POSTER_SIZE}${item.item.poster_path}`
                                : NoImage} alt={`Poster of ${item.item.title}`}/>
                    </div>
                    <div data-rating={item.item.vote_average} className="card_rating"></div>
                </div>
            </Link>
        </div>
    )
}

export default MovieItem;