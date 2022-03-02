import React from 'react';
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
                </ul>
            </div>
        </header>

    );
}
export default NavBar;

