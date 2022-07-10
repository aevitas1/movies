import './index.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Popular from "./Popular";
import Upcoming from "./Upcoming";
import About from "./About";
import {useContext} from 'react';
import {MovieContext} from '../../../data/MovieContext';
import SearchResults from "./SearchResults";
import MovieDetails from '../MovieDetails';
import ActorDetails from "../ActorDetails";

const PageWrapper = () => {
    const {
        text,
        loading
    } = useContext(MovieContext);

    return (
        <div className="page_wrapper">
            {text.length === 0 && loading === false ? (
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/popular' element={<Popular />} />
                    <Route path='/upcoming' element={<Upcoming />} />
                    <Route path='/about' element={<About />} />
                    <Route path={`/movie/:id`} element={<MovieDetails/>}/>
                    <Route path={`/actor/:id`} element={<ActorDetails />}/>
                    <Route path='*' element={<Home />} />
                </Routes>
            ) : (
                <>
                    <SearchResults />
                </>
            )}

        </div>
    )
}

export default PageWrapper;