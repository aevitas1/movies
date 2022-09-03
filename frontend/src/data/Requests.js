import axios from 'axios';
import {TRENDING_BASE_URL} from './config';


// Fetch movies to fill the database with
export const FetchMoviesApi = (setMovieApi) => {
    const fetchMoviesApi = async () => {
        try {axios.get(TRENDING_BASE_URL).then((res) => {
            setMovieApi(res.data)
        }) }
        catch(error) {
            if (error) {
                console.log(error);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("error", error.message);
            }
        }
    }
    fetchMoviesApi();
    return setMovieApi
}

// Post movies to the database
export const PostMovie = (movieApi) => {
        const postMovies = async () => {
            try {
            await axios.post("http://localhost:8000/movies", ({
                            title: movieApi.results[1].title,
                             id: movieApi.results[1].id,
                             media_type: movieApi.results[1].media_type,
                             genre_ids: movieApi.results[1].genre_ids,
                             release_date: movieApi.results[1].release_date,
                             adult: movieApi.results[1].adult,
                             backdrop_path: movieApi.results[1].backdrop_path,
                             original_language: movieApi.results[1].original_language,
                             overview: movieApi.results[1].overview,
                             poster_path: movieApi.results[1].poster_path,
                             vote_average: movieApi.results[1].vote_average,
                             vote_counter: movieApi.results[1].vote_count,
                             video: movieApi.results[1].video,
                             name: movieApi.results[1].name,
                            origin_country: movieApi.results[1].origin_country,
                            first_air_date: movieApi.results[1].first_air_date,
            }))
            // movieApi.results.forEach((item) => {
            //          axios.post("http://localhost:8000/movies", ({
            //             title: item.title,
            //              id: item.id,
            //              media_type: item.media_type,
            //              releaseDate: item.releaseDate,
            //              adult: item.adult,
            //              backdrop_path: item.backdrop_path,
            //              original_language: item.original_language,
            //              overview: item.overview,
            //              poster_path: item.poster_path,
            //              vote_average: item.vote_average,
            //              vote_counter: item.vote_count,
            //                 video: item.video,
            //         }))
            // })
            } catch (error) {
                if (error.response) {
                    console.log(error.response);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("error", error.message);
                }
            }
        }
        postMovies();
}

// Fetch movie list to render from database
export const FetchMovies = (setMovies) => {
        const fetchMovies = async () => {
            try {
                axios.get("http://localhost:8000/movies").then((res) => {
                    setMovies(res.data)
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
    return setMovies;
}


