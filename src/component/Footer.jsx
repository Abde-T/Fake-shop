import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logof from '../assets/logo.png'
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
    <div className="footer__wrapper">
        <div className='row'>
            <div className='footer__elem'>
                <img className='logo' src={logof} alt="" loading="lazy" />
                <Link to="/">Home</Link>
                <Link to="/products">Explore</Link>
                <Link to="/cart">
                     <FontAwesomeIcon icon="cart-shopping"/>
                     </Link>
            </div>
            </div>
        </div>
    );
}

export default Footer;