import React from "react";

const Footer = () => {
    return (        
        <footer>
            <h2 className='entete' aria-label="Footer WealthHealth">WealthHealth</h2>
            <p>© {new Date().getFullYear()} - HRnet</p>
        </footer>
    )
};  

export default Footer;
