import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logof from '../assets/logo.png'

function Footer(props) {
    return (
    <div className="footer__wrapper">
        <div className='row'>
            <div className='footer__elem'>
                <img className='logo' src={logof} alt="" />
                <a href="">Home</a>
                <a href="">Explore</a>
                <FontAwesomeIcon icon="cart-shopping"/>
            </div>
            </div>
        </div>
    );
}

export default Footer;