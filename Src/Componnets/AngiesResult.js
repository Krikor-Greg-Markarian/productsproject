import React from "react";
import AngiesItem from "./AngiesItem";
import cn from "classnames";

function AngiesResult(props) {
  return (
    <div className={cn("grid grid-cols-3 gap-3")}>
      {props.items.map((item, idx) => (
        <div className={cn("col-span-1")}>
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
            topButton={item.topButton}
            isSelected={true}
          />
        </div>
      ))}
    </div>
  );
}

export default AngiesResult;
