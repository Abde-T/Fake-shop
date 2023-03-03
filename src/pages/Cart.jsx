import React from "react";
import Footer from "../component/Footer";
import Nav from "../component/Nav";

function Cart() {
 
  return (
    <>
      <Nav />
      <div className="items__body">
        <main className="items__main">
          <div className="container">
            <div className="row">
              <div className="item__selected--top">
                <h2 className="basket__title">Cart</h2>
              </div>
              <div className="basket">
                <div className="basket__header">
                  <span className="basket__item">Item</span>
                  <span className="basket__quantity">Quantity</span>
                  <span className="basket__price">Price</span>
                </div>
                <div className="basket__items">
                  
                </div>
                
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer/>
    </>
  );
}

export default Cart;
