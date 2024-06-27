import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav aria-label="Main Navigation">
            <NavLink className='entete' to="/" aria-label="Home">
                <h1 aria-labelledby="site-title">WealthHealth</h1>
            </NavLink>
        </nav>
    );
}

export default Nav;
