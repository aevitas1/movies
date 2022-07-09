import './index.scss';
import Loader from "../../../Loader";
import MovieItem from "../../MovieItem";

const ActorMovies = ({loading, movies}) => {
    return loading ? (
        <>
            <Loader/>
        </>
        ) :(
        <>
            <div className="movie_grid">
                {movies.map((item) => (
                        <>
                            <MovieItem key={item.id} item={item}/>
                        </>
                ))}
            </div>
        </>
    )
}

export default ActorMovies;