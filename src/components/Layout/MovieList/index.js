import './index.scss';
import Loader from '../../Loader';
import MovieItem from '../MovieItem';

const MovieList = ({loading, movies}) => {
    return loading ?
     (
        <>
            <Loader />
        </>
    ) : (
        <>
            {movies.map((item) => (
                <MovieItem key={item.id} item={item}/>
            ))}
        </>
        )
}

export default MovieList;