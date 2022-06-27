import {NavLink} from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedinIn} from "react-icons/fa";

function Nav(navMenu) {
    const style = {
        fontSize: '2rem'
    }
    return (
        <>
            <ul className='nav' id="nav_items">
                <li className='nav_links'>
                    <NavLink onClick={navMenu} className={(navData) => navData.isActive ? 'active' : ''}
                             to='/'>Home</NavLink>
                </li>
                <li className='nav_links'>
                    <NavLink onClick={navMenu} className={(navData) => navData.isActive ? 'active' : ''}
                             to='popular'>Popular</NavLink>
                </li>
                <li className='nav_links'>
                    <NavLink onClick={navMenu} className={(navData) => navData.isActive ? 'active' : ''}
                             to='upcoming'>Upcoming</NavLink>
                </li>
                <li className='nav_links'>
                    <NavLink onClick={navMenu} className={(navData) => navData.isActive ? 'active' : ''}
                             to='/about'>About</NavLink>
                </li>
                <div className="icons">
                    <li className="icon_git">
                        <a className="no_after" href="https://github.com/aevitas1" target="_blank"
                           rel="noreferrer"><FaGithub style={style}/></a>
                    </li>
                    <li className="icon_li">
                        <a className="no_after" href="https://www.linkedin.com/in/stephan-vd-m/" target="_blank"
                           rel="noreferrer"><FaLinkedinIn
                            style={style}/></a>
                    </li>
                </div>

            </ul>
        </>
    )
}

export default Nav
