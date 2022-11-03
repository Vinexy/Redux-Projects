import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Points = () => {
  const [finished, setFinished] = useState(false);
  let amount = 0;

  const items = useSelector((state) => state.cards.items);
  const points = useSelector((state) => state.cards.points);
  useEffect(() => {
    items.map((item) => {
      if (item.isVisible === true) {
        amount += 1;
      }
      if (amount === 30) {
        setFinished(true);
      }
    });
  });

  return (
    <div className="points">
      {finished && <span className="congr">CONGRATULATIONS... </span>}
      PUAN: <span className="point">{points}</span>
    </div>
  );
};

export default Points;
