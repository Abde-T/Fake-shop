import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import cart from '../assets/cart.jpg' 

function Nav() {
    return (
        <nav>
            
            <div className='row'>
                <div className='nav__wrapper'>
                    <img className='logo' src={cart} alt="" />
                    <div className='nav__ele'>
                    <a href="/">Home</a>
                    <a href="#explore">Explore</a>
                    <FontAwesomeIcon icon="cart-shopping"/>
                    </div>
                </div>

            </div>
            
        </nav>
    );
}

export default Nav;