import './index.scss';
import {NavLink} from 'react-router-dom'
import {FaHome, FaFire, FaCaretRight, FaAddressCard } from 'react-icons/fa'
import Searchbar from "../Searchbar";
import {GoSearch} from 'react-icons/go';
import {useState} from 'react';


const Navigation = () => {

    const [searchBar, setSearchBar] = useState(false);
    const [nav, setNav] = useState(true);


    function navMenu() {
        const menuBtn = document.getElementById('menu');
        const top = document.getElementById('top');
        const middle = document.getElementById('middle');
        const bottom = document.getElementById('bottom');
        const navMenu = document.getElementById('nav_items');

        if (menuBtn.classList.contains('m_active')) {
            menuBtn.classList.remove('m_active')
            top.classList.remove('m_active')
            middle.classList.remove('m_active')
            bottom.classList.remove('m_active')
            navMenu.classList.remove('m_active')
        } else {
            menuBtn.classList.add('m_active')
            top.classList.add('m_active')
            middle.classList.add('m_active')
            bottom.classList.add('m_active')
            navMenu.classList.add('m_active')
        }
    }

    const NavSwitch = () => {
        if(searchBar === false) {
            setSearchBar(true);
            setNav(false);

        } else {
            setSearchBar(false);
            setNav(true);
        }
    }

    return (
    <div className="nav_menu">
        <ul className={nav === true ? 'nav m_active' : 'nav_hide'} id="nav_items">
            <li className='nav_links link_home'>
                <NavLink className={(navData) => navData.isActive ? 'active no_after link_home' : 'no_after'}
                         to='/'>{<FaHome/>}</NavLink>
            </li>
            <li className='nav_links link_popular'>
                <NavLink className={(navData) => navData.isActive ? 'active no_after link_popular' : 'no_after'}
                         to='/popular'>{<FaFire/>}</NavLink>
            </li>
            <li className='nav_links link_upcoming'>
                <NavLink className={(navData) => navData.isActive ? 'active no_after link_upcoming' : 'no_after'}
                         to='/upcoming'>{<FaCaretRight/>}</NavLink>
            </li>
            <li className='nav_links link_about'>
                <NavLink className={(navData) => navData.isActive ? 'active no_after link_about' : 'no_after'}
                         to='/about'>{<FaAddressCard/>}</NavLink>
            </li>
            <li className='nav_links search' onClick={NavSwitch}>
                <GoSearch />
            </li>
        </ul>

        <Searchbar searchBar={searchBar} setSearchBar={setSearchBar} setNav={setNav}/>



    <div className="nav_btn">
        <div id="menu" className="menu_btn" onClick={navMenu}>
            <div id="top" className="btn_top"></div>
            <div id="middle" className="btn_middle"></div>
            <div id="bottom" className="btn_bottom"></div>
        </div>
    </div>
    </div>)}

export default Navigation;