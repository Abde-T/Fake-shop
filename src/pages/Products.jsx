import React, { useEffect, useState } from "react";
import { slice } from "lodash";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Products() {
  const [collections, setCollections] = useState([]);
  const [index, setIndex] = useState(8);
  const [isCompleted, setIsCompleted] = useState(false);

  async function getCollections() {
    const response = await axios.get("https://fakestoreapi.com/products");
    setCollections(response.data);
  }

  useEffect(() => {
    getCollections();
  }, []);

  function filterProducts(filterValue) {
    let sortedCollections = [];
    if (filterValue === "LOW_TO_HIGH") {
      sortedCollections = collections.slice().sort((a, b) => a.price - b.price);
    } else if (filterValue === "HIGH_TO_LOW") {
      sortedCollections = collections.slice().sort((a, b) => b.price - a.price);
    } else if (filterValue === "RATING") {
      sortedCollections = collections
        .slice()
        .sort((a, b) => b.rating.rate - a.rating.rate);
    }
    setCollections(sortedCollections);
  }

  const loadMore = () => {
    const newIndex = index + 4;
    setIndex(newIndex);
    setIsCompleted(newIndex >= collections.length);
  };

  const initialPosts = slice(collections, 0, index);

  return (
    <>
      <div className="products__img">
        <h1 className="prod prod_w">Products:</h1>
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
            </select>
          </div>
          <div className="product__wrapper">
            {initialPosts.map((collection) => (
              <div className="product__info" key={collection.id}>
                <Link to={`/products/${collection.id}`}>
                  <img
                    className="item__img"
                    src={collection.image}
                    alt=""
                    loading="lazy"
                  />
                </Link>
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
          <div className="btn__center">
            {isCompleted ? (
              <button
                onClick={loadMore}
                type="button"
                className="btn disabled"
              ></button>
            ) : (
              <button
                onClick={loadMore}
                type="button"
                className="btn btn-danger"
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
