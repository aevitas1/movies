import './index.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Popular from "./Popular";
import Upcoming from "./Upcoming";
import About from "./About";

const PageWrapper = () => {

    return (
        <div className="page_wrapper">
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/popular' element={<Popular />} />
                    <Route path='/upcoming' element={<Upcoming />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<Home />} />
                </Routes>
        </div>
    )
}

export default PageWrapper;