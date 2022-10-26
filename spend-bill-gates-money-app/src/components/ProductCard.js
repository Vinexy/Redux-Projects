import React, { useState, useEffect } from "react";
import productJson from "../products.json";
import { useDispatch, useSelector } from "react-redux";
import {
  loadProduct,
  filters,
  reduceMoney,
} from ".././redux/Products/ProductSlice";

function ProductCard() {
  let total = 0;
  const [data, setData] = useState(productJson.products);
  const dispatch = useDispatch();

  const money = useSelector((state) => state.products.money);

  dispatch(loadProduct(data));
  dispatch(filters());

  const handleChange = (event, id) => {
    setData(
      data.map((x) => (x.id === id ? { ...x, count: event.target.value } : x))
    );

    dispatch(loadProduct(data));
    dispatch(filters());
  };

  const buy = (id) => {
    setData(data.map((x) => (x.id === id ? { ...x, count: parseInt(x.count)+1 } : x)));
  };

  const sell = (id) => {
    setData(data.map((x) => (x.id === id ? { ...x, count: parseInt(x.count)-1 } : x)));
  }

  return (
    <div className="container ">
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className=" col-4">
            <div className="card mb-3 border border-white text-center cardy">
              <img alt="imgs" className="imgs" src={`${item.image}`} />
              <h3>{item.productName}</h3>
              <h5>
                $
                {item.productPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h5>
              <div className="inputArea mb-3">
                <button
                  disabled={item.count === "0" || item.count === "" || item.count === 0}
                  type="button"
                  className="btn btn-danger mr-2 btn-lg" onClick={()=> sell(item.id)}
                >
                  Sell
                </button>
                <input
                  className="inputText form-control w-50"
                  type="text"
                  value={item.count}
                  onChange={(event) => handleChange(event, item.id)}
                />
                <button
                  disabled={money < item.productPrice}
                  onClick={() => buy(item.id)}
                  type="button"
                  className="btn btn-success btn-lg"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
