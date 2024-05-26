import React from 'react';
import Logo from '../../assets/image/logo.png';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">
                <img className="Logo hernet" src={Logo} alt="Hernet" />
            </NavLink>
        </nav>
    );
}

export default Nav;
