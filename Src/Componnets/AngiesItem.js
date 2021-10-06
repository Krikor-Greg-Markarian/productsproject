import React from "react";
import cn from "classnames";
import Rating2 from "./Rating2";
import Button from "./Button";

function AngiesItem(props) {
  return (
    <div className={cn("w-3/12")}>
      <div className={cn("border-2 rounded p-4")}>
        <div className={cn("flex justify-center items-center")}>
          <img
            className={cn("w-36 h-36")}
            src={props.imageUrl}
            alt="girlwithumbrella"
          />
        </div>
        <p className={cn("text-gray-500 text-xs")}>{props.smallTitle}</p>
        <p className={cn("font-bold text-2xl pt-2")}>{props.title}</p>
        <Rating2 />
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
      </div>
    </div>
  );
}

export default AngiesItem;
