import React from 'react';
import { Link } from 'react-router-dom';
import CartWidgetContainer from '../Cart/CartWidgetContainer';
const NavBar = () => {
    return (
        <header>
            <Link to="/"><h1 className='logo'>TradingCave</h1></Link>
            <nav className='menu-container'>
                <ul className='menu'>
                    <li>
                        <Link to="/" className='navLinks'>Inicio</Link>
                    </li>
                    <li>
                        <Link to="/cards/" className='navLinks'>Categorias</Link>
                        <ul>
                            <li>
                                <Link to="/cards/Normal Monster" className='navLinks'>Normal Monsters</Link>
                            </li>
                            <li>
                                <Link to="/cards/Effect Monster" className='navLinks'>Effect Monsters</Link>
                            </li>
                            <li>
                                <Link to="/cards/Ritual Effect Monster" className='navLinks'>Ritual Monsters</Link>
                            </li>
                            <li>
                                <Link to="/cards/Fusion Monster" className='navLinks'>Fusion Monsters</Link>
                            </li>
                            <li>
                                <Link to="/cards/Spell Card" className='navLinks'>Spells</Link>
                            </li>
                            <li>
                                <Link to="/cards/Trap Card" className='navLinks'>Traps</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/about-us" className='navLinks'>Sobre nosotros</Link>
                    </li>
                    <li>
                        <Link to="/my-account" className='navLinks'>Mi cuenta</Link>
                    </li>
                    <li>
                        <CartWidgetContainer />
                    </li>
                </ul>
            </nav>
        </header>

    )
};
export default NavBar;

