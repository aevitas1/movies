import {useContext} from 'react';
import {MovieContext} from './MovieContext';
import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from './config';
import {calcTime} from './helpers';
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
                            <p style={{
                                opacity: '0.75',
                                fontStyle: 'italic',
                                fontWeight: '300',
                                paddingBottom: '1rem'
                            }}>{movie.tagline}</p>


                            <span style={{display: 'inline-flex'}}>
                                {movie.adult === 'true' ? (
                                        <p>&nbsp;R-rated &#x2022;</p>
                                    ) :
                                    ('')}
                                <p style={{textTransform: 'uppercase'}}>&nbsp;{movie.release_date}&nbsp;({movie.original_language}) &#x2022; </p>
                            <p>&nbsp;{calcTime(movie.runtime)} &#x2022; </p>
                                <div style={{
                                    border: '1px solid #f8f8f8',
                                    marginLeft: '0.5rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignContent: 'center'
                                }}><p style={{transform: 'translateX(-8%)'}}>&nbsp;{movie.vote_average}</p></div>
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
