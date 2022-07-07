import './index.scss';

import {useContext} from 'react';
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../../../data/config';
import NoImage from '../../../../images/no_image.jpg';
import {calcTime, convertDate, movieScore, releaseDate} from '../../../../data/helpers';
import {MovieContext} from '../../../../data/MovieContext';

const MovieTopInfo = () => {

    const {
        movie
    } = useContext(MovieContext);

    return (
        <>
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

                        {movie.genres.length !== 0 && (
                            <p>{movie.genres[0].name} &#x2022; </p>
                        )}

                        {movie.status === 'Released' ? (
                            <p className='release_date'>&nbsp;
                                {releaseDate(movie.release_date)}
                                &nbsp;({movie.original_language}) &#x2022; </p>
                        ) : (
                            ''
                        )}
                        <p>&nbsp;{calcTime(movie.runtime)} &#x2022;</p>
                            <div className="movie_score"><p>&nbsp;
                                {movieScore(movie.vote_average)}
                                </p></div>
                            </span>
                    <p className="movie_overview">{movie.overview}</p>
                    {movie.status !== 'Released' ? (
                        <p className="release_date_full">Coming {convertDate(movie.release_date)}</p>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </>
    )
}

export default MovieTopInfo;