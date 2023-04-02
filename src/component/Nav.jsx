import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logof.png";
import Modal from "./ui/Modal";

function Nav({ numberOfItems }) {
  const [openMomdal, setOpenModal] = useState(false);

  return (
    <nav>
      <div className="row">
        <div className="nav__wrapper">
          <a href="/">
            <img className="logo" src={logo} alt="" />
          </a>
          <div className="nav__ele">
            <ul>
              <li>
            <Link to="/">Home</Link>
              </li>
              <li>
            <Link to="/products">Explore</Link>
              </li>
                <li>

            <Link to="/cart">
              <FontAwesomeIcon icon="cart-shopping" className="cart_logo"/>
            </Link>
              {numberOfItems > 0 && (
                <div className="cart__length">{numberOfItems}</div>
                )}   
                </li>
                </ul>
          </div>
          <button className="btn__menu" onClick={() => {
            setOpenModal(true)}}>
          <FontAwesomeIcon icon="bars" />
        </button>
        {openMomdal && <Modal closeModal={setOpenModal} />}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
