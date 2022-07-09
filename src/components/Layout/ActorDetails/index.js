import './index.scss';
import {useContext} from 'react';
import {MovieContext} from "../../../data/MovieContext";
import {IMAGE_BASE_URL} from "../../../data/config";
import ActorMovies from './ActorMovies';
import {gender, convertDate} from '../../../data/helpers';


const ActorDetails = () => {
    const {
        actor,
        actorMovies,
        loading
    } = useContext(MovieContext);
    console.log(actorMovies)
    console.log(gender(actor.gender))
    return (
        <>
            <h1>{actor.name}</h1>
            <p>{gender(actor.gender)}</p>
            <p>{actor.known_for_department}</p>
            <p>{convertDate(actor.birthday)}</p>
            <p>{actor.place_of_birth}</p>

            {actor.deathday !== 0 && (
                <p>{actor.deathday}</p>
            )}

            <img src={`${IMAGE_BASE_URL}original/${actor.profile_path}`} alt="" class="actor_img"/>
            <p>{actor.biography}</p>

            <div className="movie_carrousel">
                <h2 style={{padding: '3rem 0'}}>Also appears in</h2>
                { <ActorMovies movies={actorMovies.cast} loading={loading}/> }
            </div>
            {actorMovies.crew.length !== 0 &&
                (
                    <div className="movie_carrousel">
                        <h2 style={{padding: '3rem 0'}}>Also appears in</h2>
                        { <ActorMovies movies={actorMovies.crew} loading={loading}/> }
                    </div>
                )
            }

        </>
    )
}

export default ActorDetails;