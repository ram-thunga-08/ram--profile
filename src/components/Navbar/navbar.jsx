import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/sidebar'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                {/* <img src={logo} alt='logo'/> */}
                {/* <span>Ramakrishna Tunga</span> */}
            </Link>
            <Sidebar/>
            <span className='scroll-down'>Scroll down -{'>'}</span>
        </div>
    )
}

export default Navbar