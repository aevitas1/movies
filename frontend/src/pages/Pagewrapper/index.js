import './index.scss';
import {Route, Routes} from "react-router-dom";
import Home from "../Home/home";
import Movie from "../Movie/movie";
import About from '../About/index';

const Pagewrapper = () => {
    return (
        <>
            <div className="page_wrapper">
            <Routes>
                <Route exact path='/' element={<Home/>} />

                {/*Todo change '1' to movie.id*/}
                <Route path='/1' element={<Movie/>} />


                <Route path="/about" element={<About/>}/>
                <Route path='*' element={<Home />} />
            </Routes>
            </div>
        </>
    )
}

export default Pagewrapper;