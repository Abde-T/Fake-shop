import React from "react";
import landing from "../assets/landing.png";

function Landing() {
  return (
    <div className="landing__wrapper">
      <h1 className="langing__title">
        The Best <span className="orange">Shop</span> for all your{" "}
        <span className="orange">Needs</span>
      </h1>
      <h1 className="langing__title-2">
        and <span className="orange">Desires</span>{" "}
      </h1>
      <div className="row">
        <img className="landing__img" src={landing} alt="" />
        <a href="/">
          <div className="shirt"></div>
        </a>
        <a href="">
          <div className="women__shirt"></div>
        </a>
        <a href="">
          <div className="random"></div>
        </a>
        <a href="">
          <div className="cart"></div>
        </a>

        <div class="loader">
          <p>
            <span className="orange">Categories:</span>{" "}
          </p>
          <div class="words">
            <span class="word">Jewelery</span>
            <span class="word">Women's clothing</span>
            <span class="word">Men's clothing</span>
            <span class="word">Electronics</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
