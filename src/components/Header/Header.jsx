import { useState } from 'react';
import { NavLink } from 'react-router';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: 'Inicio', path: "/" },
        { name: 'Instrucciones', path: "/instrucciones" },
        { name: 'Highscores', path: "/highscores" },
        { name: 'Personajes', path: "/personajes" },
        { name: 'Sobre nosotros', path: "/sobre-nosotros" },
        { name: 'Agradecimientos', path: "/agradecimientos" },
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='header'>
            <h1 className='title'>Esli: Última Misión</h1>
            <button className='menu-toggle' onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                {navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic en un enlace
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
}

export default Header;