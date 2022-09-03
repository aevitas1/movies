import { useEffect, useState, useContext } from "react";
import {MovieContext} from "../../data/MovieContext";
import {FetchMovies, FetchMoviesApi, PostMovie } from '../../data/Requests';


function Home() {
  const {
    movies,
    setMovies,
    movieApi,
    setMovieApi
  } = useContext(MovieContext);

  const bigAssFunction = () => {
    const Fetch = () => {
      useEffect(() => {
        FetchMovies(setMovies);
      }, [setMovies])
    }
    Fetch();

    const FetchApi =  () => {
      useEffect(() => {
        FetchMoviesApi(setMovieApi)
      }, [setMovieApi]);

      useEffect(() => {
        PostMovie(movieApi)
      }, [movieApi, movies]);
    }
    FetchApi();

  }
bigAssFunction();


  return movies.length > 0 ? (
    <div>
      {movies.map((movie) => (
        <>
          <div key={movie.id}>
            <p>{movie.release_date}</p>
          </div>
          <br></br>
        </>
      ))}
    </div>
  ) : (
    "No movies found"
  );
}

export default Home;
