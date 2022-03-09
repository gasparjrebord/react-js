import React from 'react';
import CartWidget from './CartWidget';
const NavBar = () => {
    return (
        <header>
            <h1 className='logo'>MiTienda</h1>
            <div className='menu-container'>
                <ul className='menu'>
                    <li>
                        <a href=''>Sobre nosotros</a>
                    </li>
                    <li>
                        <a href=''>Categorias</a>
                    </li>
                    <li>
                        <a href=''>Mi cuenta</a>
                    </li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </div>
        </header>

    )
};
export default NavBar;

