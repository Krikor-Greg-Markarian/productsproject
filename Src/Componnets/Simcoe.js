import React from "react";
import cn from "classnames";

function Simcoe(props) {
  return (
    <div>
      <button className={cn("border-2 p-2 text-xs bg-gray-100")}>
        {props.tagsa}
      </button>
      <button className={cn("border-2 p-2 text-xs")}>{props.tagsb}</button>
      <button className={cn("border-2 p-2 text-xs")}>{props.tagsc}</button>
    </div>
  );
}

export default Simcoe;
