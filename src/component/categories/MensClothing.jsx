import axios from "axios";
import React, { useEffect, useState } from "react";

function MensClothing(props) {
  const [collections, setCollections] = useState([]);

  async function getCollections() {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/category/men's%20clothing"
    );
    setCollections(data);
  }
  useEffect(() => {
    getCollections();
  }, []);

  return (
    <>
        {collections
          .slice(0, 1)
          .map((collection) => (
            <div className="catg__wrapper">
              <div className="catg__info" key={collection.id}>
                <figure>
                  <img className="catg__img" src={collection.image} alt="" />
                </figure>
                <button className="catg__button">View More</button>
              </div>
            </div>
          ))}
    </>
  );
}

export default MensClothing;
