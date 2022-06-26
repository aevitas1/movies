import Nav from "./Nav";
import Hero from "../../images/hero_main.jpg";
import tmdb from "../../images/tmdb_logo.svg";
import rml from "../../images/react-movie-logo.svg";

function Header() {
    return (
        <div className="hero_top">
            <div className="hero_image">
                <img src={Hero} alt="" className="hero_image"/>
            </div>
            <img src={tmdb} alt="" className="hero_tmdb"/>
            <img src={rml} alt="" className="hero_rml"/>
            <div className="hero_overlay"></div>
            <div className="hero_text">
                <Nav/>
            </div>
        </div>
    );
}

export default Header;
