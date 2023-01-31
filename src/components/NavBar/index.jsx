import React from 'react';
import CartWidget from '../cartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className='container_header'>
            <div className='logo'>
                <NavLink to='/'>TodoTecno</NavLink>
            </div>
            <div className='menu'>
                <nav>
                    <ul>
                        <li><NavLink to='/cart'><CartWidget/> </NavLink></li>
                        <li><NavLink to='/categorias/teclados'>Teclados</NavLink></li>
                        <li><NavLink to='/categorias/auriculares'>Auriculares</NavLink></li>
                        <li><NavLink >ver mas</NavLink></li>
                    </ul>
                </nav>

            </div>

        </div>
            
    )
}

export default NavBar;