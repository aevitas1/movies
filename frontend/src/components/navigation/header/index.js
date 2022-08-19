import './index.scss';
import Navbar from '../navbar';
import tmdb from '../../../images/tmdb_logo.svg';
import rml from '../../../images/react-movie-logo.svg';

const Header = () => {
    return (
        <>
            <div className="hero_top">

                <a className="" href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
                    <img src={tmdb} alt="" className="hero_tmdb"/>
                </a>
                <img src={rml} alt="" className="hero_rml"/>
                <div className="hero_text">
                </div>
            </div>
        <Navbar/>
        </>
    )
}

export default Header