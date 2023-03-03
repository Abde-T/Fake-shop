import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";

function Feautured({collection, addToBasket}) {
    const [collections, setCollections] = useState([]);

  async function getCollections() {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setCollections(data);
  }
  useEffect(() => {
    getCollections();
  }, []);

  const {id} = useParams();
  const [added, SetAdded] = useState(false)

    function addItemToBasket(addedItem){
        SetAdded(true)
        addToBasket(addedItem)
    }

    useEffect(() => {
        window.scrollTo(0,0)
        SetAdded(false)
    }, [id])


  return (
    <section>
      <div className="Feautured__sec-wrapper">
        <div className="row">
          <h1 className="section__title">
            Feautured <span className="orange">Items</span>
          </h1>
          <div className="items__wrapper">
            {collections
              .sort((a, b) => b.price - a.price)
              .slice(0, 4)
              .map((collection) => (
                <div className="item__info" key={collection.id}>
                  <figure>
                  <Link to={`/products/${collection.id}`} >
                    <img className="item__img" src={collection.image} alt="" />
                  </Link>
                  </figure>
                  <div className="details__wrapper">
                    <h3 className="items__title">{collection.title}</h3>
                    <div className="details">
                      <p className="items__info">${collection.price}</p>
                      <FontAwesomeIcon icon="heart" className="heart" />
                      {
                        added?
                        
                      <FontAwesomeIcon icon="cart-shopping" className="CartShopping"/>
                        
                        :
                        <FontAwesomeIcon icon="cart-shopping" className="CartShopping" onClick={() => addItemToBasket(collection)}/>
                      }
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feautured;