import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logof.png' 

function Nav() {
    return (
        <nav>
            
            <div className='row'>
                <div className='nav__wrapper'>
                    <img className='logo' src={logo} alt="" />
                    <div className='nav__ele'>
                    <a href="/">Home</a>
                    <a href="/products">Explore</a>
                    <Link to="/cart">
                    <FontAwesomeIcon icon="cart-shopping"/>
                    </Link>
                    </div>
                </div>

            </div>
            
        </nav>
    );
}

export default Nav;