import React, { useState } from "react";

import Navbar from "./components/Navbar.js";
import Title from "./components/Title.js";
import Quantity from "./components/Quantity.js";
import Slider from "./components/Slider.js";
import Pricing from "./components/Pricing.js";
import Details from "./components/Details.js";

import "./App.scss";

const App = () => {
  const [quantity, setQuantity] = useState(30);

  return (
    <div className="app">
      <Navbar />
      <Title />
      <Quantity quantity={quantity} />
      <Slider />
      <Pricing />
      <Details />
    </div>
  );
};

export default App;
