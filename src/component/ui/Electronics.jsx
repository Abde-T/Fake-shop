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


  return (
    <>
      {collections
        .slice(0, 1)
        .map((collection) => (
          <div className="catg__wrapper" key={collection.id}>
            <div className="catg__info" >
              <figure>
                <img className="catg__img" src={collection.image} alt="" loading="lazy"/>
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