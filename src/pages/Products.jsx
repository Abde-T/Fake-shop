import React, { useEffect, useState } from "react";
import Nav from '../component/Nav';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Products(props) {
    const [collections, setCollections] = useState([]);

  async function getCollections() {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products"
    );
    setCollections(data);
  }
  useEffect(() => {
    getCollections();
  }, []);

    return (
        <>
           <Nav/>
           <div className="products__wrapper">
            <div className="row">
                <div className="product__wrapper">
           {collections
          .map((collection) => (
              <div className="product__info" key={collection.id}>
                <figure>
                  <img className="product__img" src={collection.image} alt="" />
                </figure>
                <div className="product__dtails">
                    <h3 className="items__title">{collection.title}</h3>
                    <div className="products">
                      <p className="items__info">${collection.price}</p>
                      <FontAwesomeIcon icon="heart" className="heart" />
                      <FontAwesomeIcon icon="cart-shopping" className="CartShopping"/>
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

export default Products;