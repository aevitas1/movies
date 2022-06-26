import './styles/index.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Upcoming from "./pages/Upcoming";
import About from "./pages/About";
import Header from './components/Nav/Header';
import {MovieContext, MovieProvider} from "./data/MovieContext";

import MovieDetails from "./data/MovieDetails";


function App() {
    return (
        <MovieProvider>
            <Router>
                <main className="page_wrapper">
                    <Header/>
                    <Routes>
                        <Route path='*' element={<Home/>}/>
                        <Route path='/upcoming' element={<Upcoming/>}/>
                        <Route path='/popular' element={<Popular/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path={`/movie/:id`} element={<MovieDetails/>}/>
                    </Routes>
                </main>
            </Router>
        </MovieProvider>
    );
}

export default App;
