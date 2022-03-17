import React from 'react';
import CartWidget from './CartWidget';
const NavBar = () => {
    return (
        <header>
            <h1 className='logo'>TradingCave</h1>
            <div className='menu-container'>
                <ul className='menu'>
                    <li>
                        <a href=''>About us</a>
                    </li>
                    <li>
                        <a href=''>Categories</a>
                    </li>
                    <li>
                        <a href=''>My account</a>
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

