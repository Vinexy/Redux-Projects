import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeVisible,
  shuffle,
  addPoint,
  deletePoint,
} from "../redux/CardsSlice";

const Cards = () => {
  const [filter, setFilter] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(shuffle());
  }, []);
  const items = useSelector((state) => state.cards.items);

  useEffect(() => {
    console.log(filter);
    
    if (filter.length === 2 && filter[0]?.text !== filter[1]?.text) {
      setTimeout(() => {
        dispatch(changeVisible(filter[0]));
        dispatch(changeVisible(filter[1]));
        setFilter([]);
        dispatch(deletePoint());
      }, 300);
      console.log(filter);
    } else if (filter.length === 2 && filter[0].text === filter[1].text) {
      dispatch(addPoint());
      setFilter([]);
    } 
  }, [filter]);

  function handleClick(item) {
    if (item.isVisible === false) {
      dispatch(changeVisible(item));
      setFilter([...filter, item]);
    }
  }

  return (
    <div className="container card-group">
      <div className="row row-cols-6 gy-3 p-3 offset-1">
        {items.map((item) => (
          <div
            className="card  align-items-center p-3 ms-3 element"
            key={item.id}
            onClick={() => handleClick(item)}
          >
            {item.isVisible ? (
              <img alt="img" height={100} width={100} src={`${item.img}`} />
            ) : (
              <img
                alt="img"
                height={100}
                width={100}
                src="https://i.pinimg.com/originals/62/b9/85/62b9851f99c3fd160709b4680a908f00.jpg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

// if (filteredList[0].text !== filteredList[1].text) {
//   dispatch(changeVisible(filteredList[0].id));
//   dispatch(changeVisible(filteredList[1].id));
//   dispatch(emptyList());
// }

// if (
//   filteredList[0].text !== filteredList[1].text &&
//   typeof filteredList[1] !== undefined
// ) {
//   await dispatch(changeVisible(filteredList[0]));
//   await dispatch(changeVisible(filteredList[1]));
//   await dispatch(emptyList());
// } else if (
//   filteredList[0].text === filteredList[1].text &&
//   typeof filteredList[1] !== undefined
// ) {
//   await dispatch(emptyList());
// }
