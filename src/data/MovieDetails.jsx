import {useContext} from 'react';
import {MovieContext} from './MovieContext';
import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from './config';
import {calcTime, movieScore, releaseDate} from './helpers';
import NoImage from "../images/no_image.jpg";

function MovieDetails() {
    const {
        movie,
        setMovie,
        loading
    } = useContext(MovieContext);
    {
        console.log(movie)
    }
    return loading ? (
        ''
    ) : (
        <>
            <div className="movie_wrapper">
                <div className="container">

                    <div className="cnt_l"
                         style={{backgroundImage: 'url(' + `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}` + ')'}}>
                        <div className="gradient"></div>
                    </div>
                    <div className="cnt_l_poster">
                        <img src={
                            movie.poster_path ?
                                `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                : NoImage} alt={`Poster of ${movie.title}`}/>
                    </div>
                    <div className="cnt_r">
                        <div className="title">
                            <h1>{movie.title}</h1>
                            <p className='tagline'>{movie.tagline}</p>
                            <span>
                                {movie.adult === true ? (
                                        <p>&nbsp;R-rated &#x2022;</p>
                                    ) :
                                    ('')}
                                {/*<p>{movie.genres[0].name} &#x2022;</p>*/}
                                <p className='release_date'>&nbsp;
                                    {/*{releaseDate(movie.release_date)}*/}
                                    {/*{movie.release_date.substring(0, 4)}*/}
                                    &nbsp;({movie.original_language}) &#x2022; </p>
                            <p>&nbsp;{calcTime(movie.runtime)} &#x2022;</p>
                                <div className="movie_score"><p>&nbsp;
                                    {/*{movieScore(movie.vote_average)}*/}
                                    {movie.vote_average}
                                </p></div>
                            </span>
                            <p style={{width: '50vw', paddingTop: '1rem'}}>{movie.overview}</p>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetails
