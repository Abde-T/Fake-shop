import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Jewelery(props) {
    
        const [collections, setCollections] = useState([]);

  async function getCollections() {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    setCollections(data);
  }
  useEffect(() => {
    getCollections();
  }, []);

  return (
    <>
      {collections
       
        .slice(2, 3)
        .map((collection) => (
          <div className="catg__wrapper">
            <div className="catg__info" key={collection.id}>
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

export default Jewelery;