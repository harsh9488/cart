import React from "react";

const Cart = ({ items, onRemove }) => {
  return (
    <>
      <div>
        <span>{items.name}</span>
        <span>{items.price}</span>
        <button onClick={() => onRemove(items)}>Remove</button>
      </div>
    </>
  );
};

export default Cart;
