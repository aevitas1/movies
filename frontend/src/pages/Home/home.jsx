import {useEffect, useState} from 'react';
import axios from 'axios';

function Home() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            // axios.get('http://localhost:6000/movies').then((res) => {
            //         setMovies(res.data)
            // })
            await axios.post("http://localhost:8000/movies", {

                    title: "This is from the frontend",
                    id: "2",
                    releaseDate: "01-01-2022",
            })
        }
        // const fetchMovies = async () => {
        //     const response = await fetch('/movies')
        //     const json = await response.json()
        //
        //     console.log(response)
        //     if (response.ok) {
        //         setMovies(json);
        //     }
        // }
        console.log(fetchMovies())
        fetchMovies();
    }, []);

    console.log(movies)
    return movies ? (
        <div>
            <h1>Test</h1>

            {movies.map(movie =>
                <>
                    <div key={movie.id}>
                    <h1>{movie.title}</h1>
                    <p>{movie.id} hi</p>
                    <p>{movie.releaseDate}</p>
                    <a href={movie.video}>Movie link</a>
                    </div>
                </>
            )}
        </div>
    ) : ('')
}

export default Home