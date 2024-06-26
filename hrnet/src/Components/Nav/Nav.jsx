import React from 'react';

import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <NavLink  className='entete' to="/">
            <h1 aria-details="Titre WealthHealth"> WealthHealth</h1>
            </NavLink>
        </nav>
    );
}

export default Nav;
