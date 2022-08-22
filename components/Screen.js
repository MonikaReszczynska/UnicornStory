import React from "react";
import { useState } from "react";
import "../App.css";
import './story.css'
import arr from "./ScreensData";
import Sceen1 from "../sceens/Sceen1";

const Screen = ({ onClick, count }) => {
  const [fade, setFade] = useState('false')

  const handleToggle = () => {
    setFade(!fade);
  };

  const fadeAnimation =  fade ? "textContainer textContainer--1" : "textContainer textContainer--2";

  const CurrentScreen = arr[count];

  const buttons = CurrentScreen.options.map(({ name, id }, index) => {
    return (
      <div key={id}>
        <button className="miniButton"
          hidden={CurrentScreen === undefined}
          onClick={() => {handleToggle(); onClick(index); }}
        >
          {name}
        </button>
      </div>
    );
  });

  console.log(`Screen renders!! ${fade}`);

  return (
    <div className={ fadeAnimation }
    onAnimationEnd = {() => setFade(true)}>
      <div className="text">{arr[count].text}</div>
      {buttons}
    </div>
  );
};

export default Screen;
