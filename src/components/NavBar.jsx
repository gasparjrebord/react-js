import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
const NavBar = () => {
    return (
        <header>
            <Link to="/"><h1 className='logo'>TradingCave</h1></Link>
            <nav className='menu-container'>
                <ul className='menu'>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/cards/">Categories</Link>
                        <ul>
                            <li>
                                <Link to="/cards/Normal Monster">Normal Monsters</Link>
                            </li>
                            <li>
                                <Link to="/cards/Effect Monster">Effect Monsters</Link>
                            </li>
                            <li>
                                <Link to="/cards/Ritual Effect Monster">Ritual Monsters</Link>
                            </li>
                            <li>
                                <Link to="/cards/Fusion Monster">Fusion Monsters</Link>
                            </li>
                            <li>
                                <Link to="/cards/Spell Card">Spells</Link>
                            </li>
                            <li>
                                <Link to="/cards/Trap Card">Traps</Link>
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

