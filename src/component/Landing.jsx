import axios from "axios";
import React, { useEffect, useState } from "react";

function Landing(props) {
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
        <h1 className="section__title">Feautured <span className="orange">Items</span></h1>
        <div className="items__wrapper">
        {collections
          .sort((a, b) => b.price - a.price)
          .slice(0, 4)
          .map((collection) => (
            <div className="item__info" key={collection.id}>
              <figure>
                <img src={collection.image} alt="" />
              </figure>
              <h3 className="items__title">{collection.title}</h3>
              <p className="items__info">{collection.category}</p>
              <p className="items__info">${collection.price}</p>
              </div>
            
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
