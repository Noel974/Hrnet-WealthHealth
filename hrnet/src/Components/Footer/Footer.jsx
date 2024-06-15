import React from "react";
import Logo from '../../assets/image/project14.png';

const Footer = () => {
    return (        
        <footer>
            <img className='Logo' src={Logo} alt="Hernet" /><p>© {new Date().getFullYear()} - HRnet</p>
        </footer>
    )
};  

export default Footer;