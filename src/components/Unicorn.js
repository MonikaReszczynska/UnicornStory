import React from "react";
import { ReactComponent as Unicorn } from "../assets/icons/unicorn2.svg";
import "./BtnStart.css";

const UnicornSvg = (props, ref) => {
  return (
    <div className="test" ref={ref}>
      <Unicorn className="unicornsvg" />
    </div>
  );
};

export default React.forwardRef(UnicornSvg);
