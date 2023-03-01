import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cart from '../assets/cart.jpg'

function Footer(props) {
    return (
    <div className="footer__wrapper">
        <div className='row'>
            <div className='footer__elem'>
                <img src={cart} alt="" />
                <a href="">Home</a>
                <a href="">Explore</a>
                <FontAwesomeIcon icon="cart-shopping"/>
            </div>
            </div>
        </div>
    );
}

export default Footer;