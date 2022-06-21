import './styles/index.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import New from "./pages/New";
import About from "./pages/About";
import Header from './components/Nav/Header';
import {MovieProvider} from "../src/data/MovieContext";
import SearchBar from "./components/SearchBar/SearchBar";


function App() {
    return (
        <MovieProvider>
            <Router>
                <main className="page_wrapper">
                    <Header/>
                    <SearchBar/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/new' element={<New/>}/>
                        <Route path='/popular' element={<Popular/>}/>
                        <Route path='/about' element={<About/>}/>
                    </Routes>
                </main>
            </Router>
        </MovieProvider>
    );
}

export default App;
