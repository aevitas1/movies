import {convertMoney} from "../helpers";
import {MovieContext} from '../MovieContext';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {IMAGE_BASE_URL} from '../config';
import NoImage from '../../images/no_image.jpg';


function MovieSecInfo() {
    const {
        movie,
        movieCredits
    } = useContext(MovieContext);
    console.log(movieCredits)
    return (
        <div className="info_container">
            <div className="info_stroke">
                <table>
                    <thead>
                    <tr>
                        <th>Budget</th>
                        <th>Revenue</th>
                        <th>Total votes</th>
                        <th>Website</th>
                        <th>IMDB</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{convertMoney(movie.budget)}</td>
                        <td>{convertMoney(movie.revenue)}</td>
                        <td>{movie.vote_count}</td>
                        <td><a href={movie.homepage} target="_blank" rel="noreferrer">{movie.title}</a></td>
                        <td><a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">Check
                            it out</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="actors">
                <h2>Actors</h2>
                {movieCredits.cast.slice(0, 10).map((item) => (
                    <div className="actor_card">
                        <div className="actor_img">
                            <img
                                src={item.profile_path === null ? NoImage : `${IMAGE_BASE_URL}w92/${item.profile_path}`}
                                alt=""/>
                        </div>
                        <div className="card_body">
                            <p className='real_name'>{item.name}
                                <span>
                                    ({item.gender === 1 ? ('F') : item.gender === 2 ? ('M') : ('T')})
                                </span>
                            </p>
                            <p className='play_as'>as {item.character}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieSecInfo;