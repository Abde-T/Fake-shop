import React, { useEffect, useState } from "react";
import Nav from "../component/Nav";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import Footer from "../component/Footer";

function Product({ collection, addToBasket }) {
  const { id } = useParams();
  const [collections, setCollections] = useState([]);

  async function getCollections() {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setCollections(data);
  }
  useEffect(() => {
    getCollections();
  }, []);

  const [item, setItem] = useState([]);

  async function getitem() {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    setItem(data);
  }
  useEffect(() => {
    getitem();
  }, []);

  const [added, SetAdded] = useState(false);

  function addItemToBasket(addedItem) {
    SetAdded(true);
    addToBasket(addedItem);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    SetAdded(false);
  }, [id]);

  return (
    <>
      <Nav />

      <div className="product__img--wrapper">
        <h1 className="prod">{collections.category}</h1>
      </div>
      <div className="products__wrapper">
        <div className="row">
          <div className="product__wrapper">
            {
              <div className="prod__info">
                <img className="prod__img" src={collections.image} alt="" />
                <div className="prod__dtails">
                  <h3 className="items__title">{collections.title}</h3>
                  <div className="items__info">
                    <h3>Description:</h3>
                    <p>{collections.description}</p>
                  </div>
                  <div className="products">
                    <p className="price">${collections.price}</p>
                    <FontAwesomeIcon icon="heart" className="heart" />
                    <FontAwesomeIcon
                      icon="cart-shopping"
                      className="CartShopping"
                    />
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
      <section>
        <div className="wrapper">
          <div className="row">
            <div className="sp">
              <h1 className="section__title">
                Random <span className="orange">Items</span>
              </h1>
            </div>
            <div className="items__wrapper">
              {item.slice(0, 4).map((ite) => (
                <div className="itm__info" key={ite.id}>
                  <a href={`/products/${ite.id}`}>
                    <img className="item__img" src={ite.image} alt="" />
                  </a>
                  <div className="details__wrapper">
                    <h3 className="items__title">{ite.title}</h3>
                    <div className="details">
                      <p className="items__info">${ite.price}</p>
                      <FontAwesomeIcon icon="heart" className="heart" />
                      {added ? (
                        <Link to="/basket">
                          <button className="btn item__btn">Checkout </button>
                        </Link>
                      ) : (
                        <FontAwesomeIcon
                          icon="cart-shopping"
                          className="CartShopping"
                          onClick={() => addItemToBasket(ite)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Product;
