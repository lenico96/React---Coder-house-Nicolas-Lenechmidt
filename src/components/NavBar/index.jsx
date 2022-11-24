import React from 'react';
import CartWidget from '../cartWidget';

export const NavBar = () => {
    return (
        <div className='container_header'>
            <div className='logo'>
                <a href="">MiTienda</a>
            </div>
            <div className='menu'>
                <nav>
                    <ul>
                        <li><a href=""><CartWidget/></a>0</li>
                        <li><a href="">Nosotros</a></li>
                        <li><a href="">Tienda</a></li>
                        <li><a href="">ver mas</a></li>
                    </ul>
                </nav>

            </div>

        </div>
            
    )
}

export default NavBar;