import {NavLink} from 'react-router-dom'

function Nav() {
    return (
        <>
            <ul className='nav'>
                <li className='nav_links'>
                    <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='/'>Home</NavLink>
                </li>
                <li className='nav_links'>
                    <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='popular'>Popular</NavLink>
                </li>
                <li className='nav_links'>
                    <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='new'>New</NavLink>  
                </li>
                <li className='nav_links'>
                    <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='/about'>About</NavLink>  
                </li>
            </ul>
        </>
    )
}

export default Nav
