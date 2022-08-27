import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        axios.get("http://localhost:8000/movies").then((res) => {
          console.log(res.data);
          setMovies(res.data);
        });
      } catch (error) {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("error", error.message);
        }
      }
    };
    fetchMovies();
  }, []);

  console.log(movies);
  return movies ? (
    <div>
      <h1>Test</h1>

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
    ""
  );
}

export default Home;
