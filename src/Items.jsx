import React, { useState } from "react";
import Cart from "./Cart";

const Items = () => {
  const [cartItem, setCartItem] = useState([]);

  const addhandelbtn = (item) => {
    setCartItem([...cartItem, item]);
  };

  const removeItemsFromCart = (itemToBeremove) => {
    const updateCart = cartItem.filter((val) => val !== itemToBeremove);
    setCartItem(updateCart);
  };

  const total = cartItem.reduce((acc, val) => acc + val.price, 0);

  return (
    <div>
      {/* Items */}
      <h1>Items</h1>
      <button onClick={() => addhandelbtn({ name: "Veg", price: 20 })}>
        Add Veg
      </button>
      <button onClick={() => addhandelbtn({ name: "Fruits", price: 50 })}>
        Add Fruits
      </button>

      {/* Items In the cart */}
      <h1>Items In cart</h1>
      {cartItem.map((val, i) => (
        <Cart key={i} items={val} onRemove={removeItemsFromCart} />
      ))}
      <h1>Total:{total}</h1>
    </div>
  );
};

export default Items;
