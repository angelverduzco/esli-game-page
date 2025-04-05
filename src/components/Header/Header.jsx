import { NavLink } from 'react-router';
import './Header.css'

function Header() {
    const navItems = [
        {name: 'Inicio', path: "/"},
        {name: 'Instrucciones', path: "/instrucciones"},
        {name: 'Highscores', path: "/highscores"},
        {name: 'Jefes', path: "/jefes"},
        {name: 'Quienes somos', path: "/quienes-somos"},
        {name: 'Agradecimientos', path: "/agradecimientos"},
    ]

    return (
        <header className='header'>
            <h1 className='title'>Esli: Última Misión</h1>
            <nav className='nav'>
                {navItems.map((item, index) => (
                    <NavLink key={index} to={item.path} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}

export default Header;