import React from "react";
import "../App.css";
import arr from "./ScreensData";

const Screen = ({ onClick, count }) => {
  const CurrentScreen = arr[count];

  const buttons = CurrentScreen.options.map((option, index) => {
    return (
      <div key={option.id} >
        <button hidden={CurrentScreen === arr[arr.length]} onClick={() => onClick(index)}>
          {option.name}
          </button>
      </div>
        
    )
  });


  return (
    <div>
      {buttons}
    </div>
  );
};

export default Screen;
