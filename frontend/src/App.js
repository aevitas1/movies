import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/home";
import Movie from './pages/Movie/movie';
function App() {
  return (
    <>
        <Router>
    <div className="page-outer-wrapper">
        <Routes>
            <Route path='/' element={<Home/>} />


            {/*Todo change '1' to movie.id*/}
            <Route path='/1' element={<Movie/>} />
        </Routes>
    </div>
        </Router>
    </>
  )
}

export default App;
