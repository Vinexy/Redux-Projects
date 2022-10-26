import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AnimatedNumber from "animated-number-react";
function Money() {
  const moneyAmount = useSelector((state) => state.products.money);
  const formatValue = value => `$${Number(value).toFixed(2)}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className="moneyContainer container sticky-top border border-light">
      <text className="moneyText">
        <AnimatedNumber
          value={moneyAmount}
          formatValue={formatValue}
          duration={300}
        />
          
      </text>
    </div>
  );
}

export default Money;

