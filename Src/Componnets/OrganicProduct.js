import React from "react";
import cn from "classnames";
import Rating from "./Rating";
import Rating2 from "./Rating2"


function OrganicProduct(props) {
  return (
    <div class="flex">
      <div className="flex-shrink">
        <img
          className={cn("w-20 h-20 full rounded-lg mb-0")}
          src={props.imageUrl}
          alt="nature"
        />
      </div>
      <div className="flex-shrink pl-1">
        <p className={cn("mb-0 font-bold text-2xl pl-2")}>{props.title}</p>

        {/* <p className={cn("mb-0 text-yellow-500 pl-2 ")}>
          {props.rating}

          <span className={cn("text-gray-500 pl-2 text-sm")}>
            {props.naming}
          </span>
         
        </p> */}
        {/* <div id="rating">
          <Rating className = {cn("inline")} />    
          <span className = {cn("inline")}>asds</span>
        </div> */}

        <div className="flex-shrink pl-2">
          <div className = "flex-shrink">

          <Rating2 />
          
          </div>
        </div>

        <p className={cn("mb-0 font-bold text-green-700 inline pl-2")}>
          {props.newPrice}
        </p>
        <p
          className={cn("mb-0 text-grey-500 text-sm line-through inline pl-2")}
        >
          {props.oldPrice}
        </p>
      </div>
    </div>
  );
}

export default OrganicProduct;
