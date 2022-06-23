import MovieList from '../data/MovieList';

function Home() {
    return (
        <>
            <div className="home_wrapper">
                <div className="movie_grid">
                    <MovieList/>
                </div>
            </div>
        </>
    )
}


export default Home;