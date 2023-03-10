import React from "react";
import { Link } from "react-router-dom";
import landing from "../assets/landing.png";

function Landing() {
  return (
    <div className="landing__wrapper">
      <h1 className="langing__title"  data-aos="fade-up"  data-aos-once="true" data-aos-delay="100">
        The Best <span className="orange">Shop</span> for all your Needs and <span className="orange">Desires</span>
      </h1>
      <div className="row">
        <img className="landing__img" src={landing} alt="" data-aos="fade-up"  data-aos-once="true" />
        <a href="/products">
          <div className="shirt"></div>
        </a>
        <a href="/products">
          <div className="women__shirt"></div>
        </a>
        <a href="/products">
          <div className="random"></div>
        </a>
        <a href="/cart">
          <div className="cart"></div>
        </a>

        <div class="loader">
          <p>
            <span className="orange">Categories:</span>{" "}
          </p>
          <div class="words" >
            <a href="/products">
            <span class="word">Jewelery</span>
            <span class="word">Women's clothing</span>
            <span class="word">Men's clothing</span>
            <span class="word">Electronics</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
