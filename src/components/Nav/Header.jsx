import Nav from "./Nav";
import tmdb from "../../images/tmdb_logo.svg";
import rml from "../../images/react-movie-logo.svg";


function Header() {

    const navMenu = function () {
        const menuBtn = document.getElementById('menu');
        const top = document.getElementById('top');
        const middle = document.getElementById('middle');
        const bottom = document.getElementById('bottom');
        const pageWrapper = document.getElementById('page_wrapper');
        const navbar = document.getElementById('nav');
        const sideMenu = document.getElementById('menu_slider');
        const navMenu = document.getElementById('nav_items');

        if (menuBtn.classList.contains('m_active')) {
            menuBtn.classList.remove('m_active')
            top.classList.remove('m_active')
            middle.classList.remove('m_active')
            bottom.classList.remove('m_active')
            pageWrapper.classList.remove('m_active')
            navbar.classList.remove('m_active')
            sideMenu.classList.remove('m_active')
            navMenu.classList.remove('m_active')
        } else {
            menuBtn.classList.add('m_active')
            top.classList.add('m_active')
            middle.classList.add('m_active')
            bottom.classList.add('m_active')
            pageWrapper.classList.add('m_active')
            navbar.classList.add('m_active')
            sideMenu.classList.add('m_active')
            navMenu.classList.add('m_active')
        }
    }


    return (
        <div id="nav" className="hero_top">
            <div id="menu" className="menu_btn" onClick={navMenu}>
                <div id="top" className="btn_top"></div>
                <div id="middle" className="btn_middle"></div>
                <div id="bottom" className="btn_bottom"></div>
            </div>
            <div id="menu_slider" className="side_menu">
                <Nav navMenu={navMenu}/>
            </div>

            <a className="no_after" href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
                <img src={tmdb} alt="" className="hero_tmdb"/>
            </a>

            <img src={rml} alt="" className="hero_rml"/>
            <div className="hero_text">
            </div>
        </div>
    );
}

export default Header;
