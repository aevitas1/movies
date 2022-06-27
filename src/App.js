import './styles/index.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Upcoming from "./pages/Upcoming";
import About from "./pages/About";
import Header from './components/Nav/Header';
import {MovieProvider} from "./data/MovieContext";
import Footer from "./components/Footer";
import MovieDetails from "./data/MovieDetails/MovieDetails";


function App() {
    return (
        <MovieProvider>
            <Router>
                <main id="page_wrapper" className="page_wrapper">
                    <Header/>
                    <div className="inner_wrapper">
                        <Routes>
                            <Route path='*' element={<Home/>}/>
                            <Route path='/upcoming' element={<Upcoming/>}/>
                            <Route path='/popular' element={<Popular/>}/>
                            <Route path='/about' element={<About/>}/>
                            <Route path={`/movie/:id`} element={<MovieDetails/>}/>
                        </Routes>
                        <Footer/>
                    </div>
                </main>
            </Router>
        </MovieProvider>
    );
}

export default App;
