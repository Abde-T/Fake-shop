import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function WomensClothing(props) {
  const [collections, setCollections] = useState([]);

  async function getCollections() {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    );
    setCollections(data);
  }
  useEffect(() => {
    getCollections();
  }, []);

  return (
    <>
      {collections
        .slice(3, 4)
        .map((collection) => (
          <div className="catg__wrapper" key={collection.id}>
            <div className="catg__info" >
              <figure>
                <img className="catg__img" src={collection.image} loading="lazy" alt="" />
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

export default WomensClothing;
