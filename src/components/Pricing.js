import React from "react";

import { ReactComponent as Truck } from "../images/truck.svg";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="delivery">
        <div className="supply">
          <span className="truck">
            <Truck />
          </span>
          <span>Delivery</span>
        </div>
        <span>$0.00</span>
      </div>
      <div className="total">
        <span>Total</span>
        <span>$32</span>
      </div>
      <div className="add">
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Pricing;
