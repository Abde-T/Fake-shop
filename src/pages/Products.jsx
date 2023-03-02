import React, { useEffect, useState } from "react";
import Nav from "../component/Nav";
import axios from "axios";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../component/Footer";

function Products() {
  const [collections, setCollections] = useState([]);
 
  async function getCollections() {
    const { data } = await axios.get("https://fakestoreapi.com/products");
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
          .sort((a, b) => (a.price) - ( b.price))
      );
    } else if (filterValue === "HIGH_TO_LOW") {
      setCollections(
        collections
          .slice()
          .sort((a, b) => (b.price) - (a.price))
      );
    } else if (filterValue === "RATING") {
      setCollections(
        collections.slice().sort((a, b) => b.rating.rate - a.rating.rate)
      );
    }
  }

  return (
    <>
      <Nav />
      <div className="products__img">
        <h1 className="prod">Products:</h1>
      </div>
      <div className="products__wrapper">
        <div className="row">
          <div className="sort">
            <h4>Browse products:</h4>
          <select
            id="filter"
            defaultValue="DEFAULT"
            onChange={(event) => filterProducts(event.target.value)}
            >
            <option value="DEFAULT" disabled>
              Sort
            </option>
            <option value="LOW_TO_HIGH">Price, Low to High</option>
            <option value="HIGH_TO_LOW">Price, High to Low</option>
            <option value="RATING">Rating</option>
          </select>
            </div>
          <div className="product__wrapper">
            {collections.map((collection) => (
              <div className="product__info" key={collection.id}>
                <Link to={`/products/${collection.id}`} >
                <img className="product__img" src={collection.image} alt="" />
                </Link>

                <div className="product__dtails">
                  <h3 className="items__title">{collection.title}</h3>
                  <div className="products">
                    <p className="items__info">${collection.price}</p>
                    <FontAwesomeIcon icon="heart" className="heart" />
                    <FontAwesomeIcon
                      icon="cart-shopping"
                      className="CartShopping"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
      <Footer />
      </div>
    </>
  );
}

export default Products;
