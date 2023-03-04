import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Info() {
  return (
    <div className="info__sec-wrapper">
      <div className="row">
        <div className="info__wrapper">
        <div className="info" data-aos="fade-up"  data-aos-once="true">
            <FontAwesomeIcon icon="shop" className="icon"/>
            <h3 className="info__h3">Elevate your Shoppping experience with the best ecommerce shop.</h3>
            <FontAwesomeIcon icon="shop" className="icon__bg"/>
        </div>
        <div className="info" data-aos="fade-up"  data-aos-once="true">
            <FontAwesomeIcon icon="money-bill" className="icon"/>
            <h3 className="info__h3">Experience the best deals their is. with money back guarented.</h3>
            <FontAwesomeIcon icon="money-bill" className="icon__bg"/>
        </div>
        <div className="info" data-aos="fade-up"  data-aos-once="true">
            <FontAwesomeIcon icon="hands-clapping" className="icon"/>
            <h3 className="info__h3">Join us and experience our shops ultimate customer service. </h3>
            <FontAwesomeIcon icon="hands-clapping" className="icon__bg"/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
