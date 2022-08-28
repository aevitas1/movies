import { useEffect, useState, useContext } from "react";
import {MovieContext} from "../../data/MovieContext";
import {FetchMovies} from '../../data/Requests';


function Home() {
  const {movies, setMovies} = useContext(MovieContext);

  useEffect(() => {
    FetchMovies(setMovies);
  }, [setMovies])


  return movies.length > 0 ? (
    <div>
      {movies.map((movie) => (
        <>
          <div key={movie.id}>
            <h1 key={movie.title}>{movie.title}</h1>
            <p key={movie.id}>{movie.id} hi</p>
            <p key={movie.releaseDate}>{movie.releaseDate}</p>
            <a href={movie.video} key={movie.video}>
              Movie link
            </a>
          </div>
        </>
      ))}
    </div>
  ) : (
    "No movies found"
  );
}

export default Home;
