import './index.scss';
import {NavLink} from 'react-router-dom'
import {FaHome, FaFire, FaCaretRight, FaAddressCard } from 'react-icons/fa';
import Searchbar from "../searchbar";
import {GoSearch} from 'react-icons/go';
import {useState} from 'react';

const Navbar = () => {
    const [searchBar, setSearchBar] = useState(false);
    const [nav, setNav] = useState(true);

    const NavSwitch = () => {
        if (searchBar) {
            setSearchBar(true);
            setNav(false);
        } else {
            setSearchBar(false);
            setNav(true);
        }
    }


    return (
        <>
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

            </div>
        </>
    )
}

export default Navbar