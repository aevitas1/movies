import './index.scss';
import tmdb from "../../../images/tmdb_logo.svg";
import rml from "../../../images/react-movie-logo.svg";


const Header = () => {

    return (
    <>
        <div className="hero_top">

            <a className="no_after" href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
                <img src={tmdb} alt="" className="hero_tmdb"/>
            </a>
            <img src={rml} alt="" className="hero_rml"/>
            <div className="hero_text">
            </div>
        </div>
        <p style={{textAlign: 'center', padding: '1rem 1rem'}}>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
    </>
    )
}

export default Header;