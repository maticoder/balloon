import React from "react";

import { ReactComponent as Arrow } from "../images/arrow.svg";
import { ReactComponent as User } from "../images/user.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="arrow">
        <Arrow />
      </span>
      <div className="menu">
        <span>Cart</span>
        <User />
        <span className="cart">0</span>
      </div>
    </nav>
  );
};

export default Navbar;
