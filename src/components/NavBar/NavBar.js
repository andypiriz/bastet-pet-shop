import '../NavBar/NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav>
            <Link to='/'>
                <img src='images/logo-bastet.jpg' alt='logo' />
            </Link>
            <div>
                <NavLink to='/category/gatos' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Gatos</NavLink>
                <NavLink to='/category/perros' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Perros</NavLink>
                <NavLink to='/category/peces' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Peces</NavLink>
                <NavLink to='/category/aves' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Aves</NavLink>
                <NavLink to='/category/otros' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Otros</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar