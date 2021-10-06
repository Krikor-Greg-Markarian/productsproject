import React from "react";
import cn from "classnames";

function Button(props) {
  return (
    <div className={cn(props.className)}>
      <button>{props.text}</button>
    </div>
  );
}

export default Button;
