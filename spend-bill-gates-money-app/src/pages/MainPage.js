import React from "react";

import Header from "../components/Header.js";
import ProductCard from "../components/ProductCard.js";
import Receipt from "../components/Receipt.js";
import Money from "../components/Money.js";

function MainPage() {
  return (
    <div className="App">
      <Header />
      <Money />
      <ProductCard />
      <Receipt />
      
    </div>
  );
}

export default MainPage;
