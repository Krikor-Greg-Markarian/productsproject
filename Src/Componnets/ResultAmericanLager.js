import React from "react";
import AmericanLager from "./AmericanLager";

function ResultAmericanLager(props) {
  return (
    <div>
      {props.items.map((item, idx) => (
        <AmericanLager
          imageUrl={item.imageUrl}
          title={item.title}
          description={item.description}
          text={item.text}
          button={item.button}
        />
      ))}
    </div>
  );
}

export default ResultAmericanLager;
