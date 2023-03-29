import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function Modal({closeModal}) {
    return (
        <>
        
          <div className="menu__backdrop">
              <button className="btn__menu btn__menu--close" onClick={() => closeModal(false)}>
                  <FontAwesomeIcon icon="times" />
              </button>
              <ul className=" menu__links">
                  <li className="menu__list"><Link to="/" className="menu__link" onClick={() => closeModal(false)}>Home</Link></li>
                  <li className="menu__list"><Link to="/products" className="menu__link" onClick={() => closeModal(false)}>Explore</Link></li>
                  <li className="menu__list"><Link to="/cart" className="menu__link" onClick={() => closeModal(false)}> <FontAwesomeIcon icon="cart-shopping" className="cart_logo"/></Link></li>
              </ul>
          </div>
                </>
    );
}

export default Modal;