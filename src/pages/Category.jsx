import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, Link } from "react-router-dom";

function Category(props) {
  const { category } = useParams();
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    async function getCollections() {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setCollections(data);
    }
    getCollections();
  }, [category]);

  function filterProducts(filterValue) {
    const sortedCollections = [...collections];
    if (filterValue === "LOW_TO_HIGH") {
      sortedCollections.sort((a, b) => a.price - b.price);
    } else if (filterValue === "HIGH_TO_LOW") {
      sortedCollections.sort((a, b) => b.price - a.price);
    }
    setCollections(sortedCollections);
  }

  return (
    <>
      <div className="margin"></div>
      <div className="gategory__wrapper">
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
          <div className="categ__wrapper">
            {collections.map((collection) => (
              <div className="item__info" key={collection.id}>
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
        </div>
      </div>
    </>
  );
}

export default Category;
