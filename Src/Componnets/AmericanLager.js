import React from "react";
import cn from "classnames";
import Simcoe from "./Simcoe";

const bunchOfTags = [
  {
    tagsa: "Simcoe & Citra",
    tagsb: "32 IBU",
    tagsc: "7.6% ABV",
  },
];

function AmericanLager(props) {
  return (
    <div className={cn("w-3/12")}>
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
      <p className={cn("text-gray-600 text-center pt-2")}>{props.text}</p>
      <div className={cn("flex justify-center items-center pt-2")}>
        <button className={cn("bg-red-500 p-3 text-white")}>
          {props.button}
        </button>
      </div>
    </div>
  );
}

export default AmericanLager;
