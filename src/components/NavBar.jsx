import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
const NavBar = () => {
    return (
        <header>
            <h1 className='logo'>TradingCave</h1>
            <nav className='menu-container'>
                <ul className='menu'>
                    <li>
                        <Link to="/cards/">Categories</Link>
                        <ul>
                            <li>
                                <Link to="/cards/monsters-cards">Monsters</Link>
                            </li>
                            <li>
                                <Link to="/cards/spell-cards">Spells</Link>
                            </li>
                            <li>
                                <Link to="/cards/trap-cards">Traps</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/about-us">About us</Link>
                    </li>
                    <li>
                        <Link to="/my-account">My account</Link>
                    </li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </nav>
        </header>

    )
};
export default NavBar;

