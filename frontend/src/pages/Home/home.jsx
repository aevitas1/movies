import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        axios.get("http://localhost:8000/movies").then((res) => {
          console.log(res.status);
        });
      } catch (error) {
        if (error.response) {
          console.log(error.response);
          //   console.log(error.response.data);
          //   console.log(error.response.headers);
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
            <h1>{movie.title}</h1>
            <p>{movie.id} hi</p>
            <p>{movie.releaseDate}</p>
            <a href={movie.video}>Movie link</a>
          </div>
        </>
      ))}
    </div>
  ) : (
    ""
  );
}

export default Home;
