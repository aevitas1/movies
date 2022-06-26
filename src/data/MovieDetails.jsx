import {useContext} from 'react';
import {MovieContext} from './MovieContext';
import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from './config';
import {calcTime, movieScore, releaseDate, convertMoney, convertDate} from './helpers';
import NoImage from "../images/no_image.jpg";
import Loading from '../components/Loading';

function MovieDetails() {
    const {
        movie,
        loading,
        movieCredits,
        movieVideo,
        movieImages,
    } = useContext(MovieContext);


    return loading ? (
        <>
            <Loading/>
        </>
    ) : (
        <div className="movie_wrapper">
            <div className="movie_container">
                <div className="cnt_l"
                     style={{backgroundImage: 'url(' + `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}` + ')'}}
                >
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
                            <p>{movie.genres[0].name} &#x2022;</p>
                            {console.log(movie.status)}
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
            </div>
            <iframe width="200" height="150"
                    src={`https://www.youtube.com/embed/${movieVideo.results[0].key}`}
            >
            </iframe>
            <div className="info_container">
                <div className="info_stroke">
                    <table>
                        <thead>
                        <tr>
                            <th>Budget</th>
                            <th>Header</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{convertMoney(movie.budget)}</td>
                            <td>{convertMoney(movie.revenue)}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="actors">
                    <table>
                        <thead>
                        <tr>
                            <th>Actors</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>

                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>)
}

export default MovieDetails
