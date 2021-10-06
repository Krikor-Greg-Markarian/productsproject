import React from "react";
import cn from "classnames";
import OrganicProduct from "./OrganicProduct";

function OrganicComponent(props) {
  return (
    <div>
      {props.items.map((item, idx) => (
        <OrganicProduct
          key={idx}
          imageUrl={item.imageUrl}
          title={item.title}
          rating={item.rating}
          naming={item.naming}
          newPrice={item.newPrice}
          oldPrice={item.oldPrice}
        />
      ))}
    </div>
  );
}

export default OrganicComponent;
