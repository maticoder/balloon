import React from "react";

import { ReactComponent as Lightning } from "../images/lightning.svg";

const Title = () => {
  return (
    <div className="title">
      <div className="seller">
        <div className="lightning">
          <Lightning />
        </div>
        <span>Top Seller</span>
      </div>
      <h1>Party Balloons</h1>
      <div className="details">
        <span>from $25</span>
        <span></span>
        <span>latex balloons</span>
      </div>
    </div>
  );
};

export default Title;
