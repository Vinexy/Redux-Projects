import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reduceMoney } from "../redux/Products/ProductSlice";

function Receipt() {
  let totalAmount = 0;

  const filteredItems = useSelector((state) => state.products.filteredItems);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(totalAmount);
    dispatch(reduceMoney(totalAmount));
  }, [filteredItems]);

  const handle = (num) => {
    if (num >= 1000000000) {
      return <text>{(num / 1000000000).toFixed(1) + "G"}</text>;
    }
    if (num > 999 && num < 1000000) {
      return <text>{(num / 1000).toFixed(1) + "K"}</text>;
    }
    if (num >= 1000000) {
      return <text>{(num / 1000000).toFixed(1) + "M"}</text>;
    }
    if (num < 900) {
      return <text>{num}</text>;
    }
  };

  return (
    <div className="row">
      <h1>Your Receipt</h1>
      <div>
        {filteredItems.map((item, index) => {
          totalAmount += parseInt(item.count) * parseInt(item.productPrice);

          return (
            <div key={index} className="row">
              <text className="col-2 offset-3">{item.productName} </text>
              <text className="col-2">×{item.count} </text>
              <h6 className="col-2 text-success">
                ${handle(parseInt(item.count) * parseInt(item.productPrice))}
              </h6>
            </div>
          );
        })}
      </div>
      <div className="col-6 row offset-3 border-dark border-2 border-top float-start ">
        <text className=" col-4 fw-bold fs-5">Total</text>
        <text className="col-3 offset-4 text-success fw-bold fs-5">
          ${totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </text>
      </div>
    </div>
  );
}

export default Receipt;
