import React from "react";
import cn from "classnames";
import Rating2 from "./Rating2";
import Button from "./Button";

function AngiesItem(props) {
  return (
    <div className={cn("border-2 rounded-lg p-4 relative w-9/12")}>
      <div className={cn("flex justify-center items-center")}>
        <img
          className={cn("w-28 h-28")}
          src={props.imageUrl}
          alt="girlwithumbrella"
        />
      </div>

      <p className={cn("text-gray-500 text-xs")}>{props.smallTitle}</p>
      <p className={cn("font-bold text-2xl pt-2")}>{props.title}</p>
      <div className={cn("pt-1")}>
        <Rating2 />
      </div>

      <p className={cn("text-gray-500 text-sm pt-1")}>{props.gram}</p>
      <div class="flex">
        <div className="flex-shrink ">
          <p className={cn("text-green-800 font-bold pt-2")}>{props.price}</p>
        </div>
        <div className="flex-shrink pl-5 pt-1">
          <Button
            className={cn(
              "bg-green-200 px-7 py-1 rounded text-center text-green-800 font-bold"
            )}
            text={"Add"}
          />
        </div>
      </div>
      <p className={cn("text-gray-500 line-through font-bold")}>
        {props.oldPrice}
      </p>

      {props.isSelected ? (
        <p
          className={cn(
            "text-white bg-green-400 w-3/12 rounded-r-lg rounded-l-lg text-center absolute top-0 left-0"
          )}
        >
          {props.topButton}
        </p>
      ) : null}
    </div>
  );
}

export default AngiesItem;
