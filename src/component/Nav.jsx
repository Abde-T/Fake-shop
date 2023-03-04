import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logof.png";

function Nav({ numberOfItems }) {
  return (
    <nav>
      <div className="row">
        <div className="nav__wrapper">
          <a href="/">
            <img className="logo" src={logo} alt="" />
          </a>
          <div className="nav__ele">
            <Link to="/">Home</Link>
            <Link to="/products">Explore</Link>
                
            <Link to="/cart">
              <FontAwesomeIcon icon="cart-shopping" className="cart_logo"/>
            </Link>
              {numberOfItems > 0 && (
                  <div className="cart__length">{numberOfItems}</div>
                  )}
                  
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
