import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Feautured = () => {
  const [collections, setCollections] = useState([]);

  const getCollections = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setCollections(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollections();
  }, []);

  const featuredItems = collections
    .sort((a, b) => b.price - a.price)
    .slice(0, 4);

  return (
    <section>
      <div className="Feautured__sec-wrapper">
        <div className="row">
          <h1 className="section__title">
            <span className="orange">Featured Items</span>
          </h1>
          <div
            className="items__wrapper"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="100"
          >
            {featuredItems.map((collection) => (
                <div className="item__info" key={collection.id}>
                  <figure>
                    <Link to={`/products/${collection.id}`}>
                      <img
                        className="item__img"
                        src={collection.image}
                        alt=""
                        loading="lazy"
                      />
                    </Link>
                  </figure>
                  <div className="details__wrapper">
                    <h3 className="items__title">{collection.title}</h3>
                    <div className="details">
                      <p className="items__info">${collection.price}</p>
                      <FontAwesomeIcon icon="heart" className="heart" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feautured;
