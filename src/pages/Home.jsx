import MovieList from '../data/MovieList';

function Home() {
    return (
        <>
            <div className="home_wrapper">
                <div className="home_movie_grid">
                    <MovieList />
                </div>
            </div>
        </>
    )
}


export default Home;