import React, { useEffect, useState } from "react";
import emptyBasketImg from "../assets/cart.png";
import { Link } from "react-router-dom";
import CartItems from "../component/ui/CartItems";

function Cart({ basket, changeQuantity, removeItem }) {
  useEffect(() => window.scrollTo(0, 0), []);
  const [total, setTotal] = useState(0);
  const emptyBasket = basket.length > 0 ? false : true;
  useEffect(() => {
    let price = 0;
    basket.forEach((item) => {
      price += +item.price * item.quantity;
    });
    setTotal(price.toFixed(2));
  }, [basket]);

  const subTotal = (total * 0.9).toFixed(2);

  return (
    <>
      <div className="margin">
      </div>
      <div className="items__body">
        <main className="items__main">
          <div className="container">
            <div className="row">
              <div className="basket">
                <div className="basket__header">
                  <span className="basket__item">Item</span>
                  <span className="basket__quantity">Quantity</span>
                  <span className="basket__price">Price</span>
                </div>
                <div className="basket__items">
                  {basket.map((item) => {
                    return (
                      <CartItems
                        key={item.id}
                        itemInfo={item}
                        changeQuantity={changeQuantity}
                        removeItem={removeItem}
                      />
                    );
                  })}
                </div>
                {emptyBasket && (
                  <div className="basket__empty">
                    <img
                      src={emptyBasketImg}
                      alt=""
                      className="basket__empty--img"
                      loading="lazy"
                    />
                    <h2>You don't have anything in your basket</h2>
                    <Link to="/products">
                      <button className="btn">Browse Items</button>
                    </Link>
                  </div>
                )}
                {!emptyBasket && (
                  <div className="basket__price--container">
                    <div className="basket__subtotal">
                      <span className="basket__price--title">Sub-Total</span>
                      <span className="basket__price--label">£{subTotal}</span>
                    </div>
                    <div className="basket__tax">
                      <span className="basket__price--title">Tax</span>
                      <span className="basket__price--label">
                        £{(total - subTotal).toFixed(2)}
                      </span>
                    </div>
                    <div className="basket__total">
                      <span className="basket__price--title">Total</span>
                      <span className="basket__price--label">£{total}</span>
                    </div>
                    <button className="not">
                      Proceed to Checkout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Cart;
