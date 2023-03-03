import React from 'react';

function CartItems({itemInfo, changeQuantity, removeItem}) {
    return (
        <div className="basket__item--row">
        <div className="basket__item">
            <div className="basket__item--wrapper">
                <img src={itemInfo.image} className="basket__item--img" alt="" />
                <div className="basket__item--info">
                    <span className="basket__item--title">{itemInfo.title}</span>
                    <span className="basket__item--price">{`£${(itemInfo.price.sale || itemInfo.price).toFixed(2)}`}</span>
                    <span className="basket__item--remove clickable" onClick={() => removeItem(itemInfo)}>Remove</span>
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
                onChange={(event) => changeQuantity(itemInfo, event.target.value)}/>
        </div>
        <div className="basket__price">
            {`£${((itemInfo.price.sale || itemInfo.price) * itemInfo.quantity).toFixed(2)}`}
        </div>
    </div>
    );
}

export default CartItems;