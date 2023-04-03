import React from "react";
import { Link } from "react-router-dom";
import landing from "../assets/landing.png";

function Landing() {
  return (
    <>
    <div className="landing__wrapper">
      <h1 className="langing__title"  data-aos="fade-up"  data-aos-once="true" data-aos-delay="100">
        The Best <span className="orange">Shop</span> for all your Needs and <span className="orange">Desires</span>
      </h1>
      <div className="row">
        <div className="img__wrapper">
        <img className="landing__img" src={landing} loading="lazy" alt="" data-aos="fade-up"  data-aos-once="true" />
        <div className="loader">
          <p>
           Categories:
          </p>
          <div className="words" >
            <Link to="/products">
            <span className="word">Jewelery</span>
            <span className="word">Women's clothing</span>
            <span className="word">Men's clothing</span>
            <span className="word">Electronics</span>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Landing;
