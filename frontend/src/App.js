import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./pages/main";
import Movie from './pages/movie';
function App() {
  return (
    <>
        <Router>
    <div className="page-outer-wrapper">
        <Routes>
            <Route path='/' element={<Main/>} />


            {/*Todo change '1' to movie.id*/}
            <Route path='/1' element={<Movie/>} />
        </Routes>
    </div>
        </Router>
    </>
  )
}

export default App;
