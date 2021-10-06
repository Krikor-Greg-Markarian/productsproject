import React from "react";
import AngiesItem from "./AngiesItem";

function AngiesResult(props) {
  return (
    <div>
      {props.items.map((item, idx) => (
        <AngiesItem
          imageUrl={item.imageUrl}
          smallTitle={item.smallTitle}
          title={item.title}
          rating={item.rating}
          rateNumber={item.rateNumber}
          gram={item.gram}
          price={item.price}
          button={item.button}
          oldPrice={item.oldPrice}
        />
      ))}
    </div>
  );
}

export default AngiesResult;
