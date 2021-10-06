import React from "react";
import AmericanLager from "./AmericanLager";
import cn from "classnames";

function ResultAmericanLager(props) {
  return (
    <div className={cn("grid grid-cols-3 gap-3")}>
      {props.items.map((item, idx) => (
        <div className={cn("col-span-1")}>
          <AmericanLager
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            text={item.text}
            button={item.button}
          />
        </div>
      ))}
    </div>
  );
}

export default ResultAmericanLager;
