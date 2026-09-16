import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>Trabajo Práctico Nº2</h2>
            </div>
            <ul className='nav-links'>
                <li>
                    <NavLink to="/" end>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/servicios">Servicios</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto">Contacto</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;