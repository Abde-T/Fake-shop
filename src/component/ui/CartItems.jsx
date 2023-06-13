import React from "react";

const CartItems = ({ itemInfo, changeQuantity, removeItem }) => {
  const totalPrice = (itemInfo.price * itemInfo.quantity).toFixed(2);

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    changeQuantity(itemInfo, newQuantity);
  };
  return (
    <div className="basket__item--row">
      <div className="basket__item">
        <div className="basket__item--wrapper">
          <img
            src={itemInfo.image}
            className="basket__item--img"
            loading="lazy"
            alt=""
          />
          <div className="basket__item--info">
            <span className="basket__item--title">{itemInfo.title}</span>
            <span className="basket__item--price">{`$${itemInfo.price.toFixed(2)}`}</span>
            <span
              className="basket__item--remove clickable"
              onClick={() => removeItem(itemInfo)}
            >
              Remove
            </span>
          </div>
        </div>
      </div>
      <div className="basket__quantity">
        <input
          type="number"
          min={0}
          max={99}
          className="basket__input"
          value={itemInfo.quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className="basket__price">
        {`$${totalPrice}`}
      </div>
    </div>
  );
};

export default CartItems;
