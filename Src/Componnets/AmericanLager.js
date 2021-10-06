import React from "react";
import cn from "classnames";
import Simcoe from "./Simcoe";
import Button from "./Button";

const bunchOfTags = [
  {
    tagsa: "Simcoe & Citra",
    tagsb: "32 IBU",
    tagsc: "7.6% ABV",
  },
];

function AmericanLager(props) {
  return (
    <div>
      <div className={cn("flex justify-center items-center")}>
        <img
          className={cn("w-20 h-20 rounded-full")}
          src={props.imageUrl}
          alt="flower picture"
        />
      </div>
      <p className={cn("text-red-500 text-center pt-2")}>{props.title}</p>
      <p className={cn("font-bold text-2xl text-center pt-2")}>
        {props.description}
      </p>
      <div className={cn("flex justify-center items-center")}>
        {bunchOfTags.map((item, idx) => (
          <Simcoe tagsa={item.tagsa} tagsb={item.tagsb} tagsc={item.tagsc} />
        ))}
      </div>
      <p className={cn("text-gray-600 text-center pt-2 text-sm")}>
        {props.text}
      </p>
      <div className={cn("flex justify-center items-center pt-2")}>
        <Button
          className={cn(
            "bg-red-400 py-2 w-7/12 rounded text-center text-white"
          )}
          text={"purchase now"}
        />
      </div>
    </div>
  );
}

export default AmericanLager;
