import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";

function Product({ items, addToBasket }) {
  const { id } = useParams();
  const [collections, setCollections] = useState([]);
  const [item, setItem] = useState([]);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setCollections(response.data);
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://fakestoreapi.com/products");
      setItem(response.data);
    }
    fetchData();
  }, []);

  const recommended = items
    .filter((item) => item.category && +item.id !== +id)
    .slice(0, 4);

  function addItemToBasket(addedItem) {
    setAdded(true);
    addToBasket(addedItem);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setAdded(false);
  }, [id]);

  return (
    <>
      <div className="margin"></div>
      <h1 className="prod prod_w">{collections.category}</h1>
      <div className="products__wrapper">
        <div className="row">
          <div className="product__wrapper">
            <div className="prod__info">
              <div className="prod__im">
                <img
                  className="prod__img"
                  src={collections.image}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="prod__dtails">
                <h3 className="items__title item__title">
                  {collections.title}
                </h3>
                <div className="items__info">
                  <h3>Description:</h3>
                  <p>{collections.description}</p>
                </div>
                <div className="products">
                  <p className="price">${collections.price}</p>
                  <FontAwesomeIcon icon="heart" className="heart" />
                  {added ? (
                    <Link to="/cart">
                      <button className=" cart__btn">Checkout</button>
                    </Link>
                  ) : (
                    <FontAwesomeIcon
                      icon="cart-shopping"
                      className="CartShopping"
                      onClick={() => addItemToBasket(collections)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="wrapper gray">
          <div className="row ">
            <h1 className="section__title sec__t ">
              <span className="orange"> Recommended-Items</span>
            </h1>
            <div className="items__wrapper ">
              {recommended.map((item) => (
                <div className="itm__info" key={item.id}>
                  <a href={`/products/${item.id}`}>
                    <img
                      className="item__img"
                      src={item.image}
                      alt=""
                      loading="lazy"
                    />
                  </a>
                  <div className="details__wrapper">
                    <h3 className="items__title">{item.title}</h3>
                    <div className="details">
                      <p className="items__info">${item.price}</p>
                      <FontAwesomeIcon icon="heart" className="heart" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
