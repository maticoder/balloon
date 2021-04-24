import React from "react";

const Quantity = ({ quantity }) => {
  return (
    <div className="quantity">
      <span>Quantity</span>
      <span>{quantity}</span>
    </div>
  );
};

export default Quantity;
