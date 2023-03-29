import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Electronics(props) {
    const [collections, setCollections] = useState([]);

  async function getCollections() {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/category/electronics"
    );
    setCollections(data);
  }
  useEffect(() => {
    getCollections();
  }, []);

  function filterProducts(filterValue) {
    if (filterValue === "LOW_TO_HIGH") {
      setCollections(
        collections
          .slice()
          .sort((a, b) => (a.price.sale || a.price) - (b.price.sale || b.price))
      );
    } else if (filterValue === "HIGH_TO_LOW") {
      setCollections(
        collections
          .slice()
          .sort((a, b) => (b.price.sale || b.price) - (a.price.sale || a.price))
      );
    }
  }

  return (
    <>
      {collections
        .slice(0, 1)
        .map((collection) => (
          <div className="catg__wrapper" key={collection.id}>
            <div className="catg__info" >
              <figure>
                <img className="catg__img" src={collection.image} alt="" />
              </figure>
              <Link to={`/products/category/${collection.category}`} >
              <button className="catg__button">View More</button>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
}

export default Electronics;