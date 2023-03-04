import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function Feautured() {
  const [collections, setCollections] = useState([]);

  async function getCollections() {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setCollections(data);
  }
  useEffect(() => {
    getCollections();
  }, []);

  return (
    <section>
      <div className="Feautured__sec-wrapper">
        <div className="row">
          <h1 className="section__title">
            Feautured <span className="orange">Items</span>
          </h1>
          <div
            className="items__wrapper"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="400"
          >
            {
            collections
              .sort((a, b) => b.price - a.price)
              .slice(0, 4)
              .map((collection) => (
                <div className="item__info" key={collection.id}>
                  <figure>
                    <Link to={`/products/${collection.id}`}>
                      <img
                        className="item__img"
                        src={collection.image}
                        alt=""
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
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feautured;
