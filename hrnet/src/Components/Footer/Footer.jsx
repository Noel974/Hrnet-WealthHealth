import React from "react";
import Logo from '../../assets/image/logo.png';

const Footer = () => {
    return (        
        <footer>
            <img className='Logo' src={Logo} alt="Hernet" /><p>© {new Date().getFullYear()} - HRnet</p>
        </footer>
    )
};  

export default Footer;