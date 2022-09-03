import React from "react";
import { useState } from "react";
import "../App.css";
import "./story.css";
import arr from "./ScreensData";

import Sceen1 from "../scenes/Scene1";
import Sceen2 from "../scenes/Scene2";
import Sceen3 from "../scenes/Scene3";
import Sceen4 from "../scenes/Scene4";
import Sceen5 from "../scenes/Scene5";
import Sceen6 from "../scenes/Scene6";
import Sceen7 from "../scenes/Scene7";
import Sceen8 from "../scenes/Scene8";
import Sceen9 from "../scenes/Scene9";

const Components = {
  sceen1: Sceen1,
  sceen2: Sceen2,
  sceen3: Sceen3,
  sceen4: Sceen4,
  sceen5: Sceen5,
  sceen6: Sceen6,
  sceen7: Sceen7,
  sceen8: Sceen8,
  sceen9: Sceen9,
};

const Screen = ({ onClick, count }) => {
  const [fade, setFade] = useState("false");

  const handleToggle = () => {
    setFade(!fade);
  };

  const fadeAnimation = fade
    ? "textContainer textContainer--1"
    : "textContainer textContainer--2";

  const CurrentScreen = arr[count];

  const CurrentSceen = CurrentScreen.component
    ? Components[CurrentScreen.component]
    : null;

  const buttons = CurrentScreen.options.map(({ name, id }, index) => {
    return (
      <div className="buttonContainer" key={id}>
        <button
          className="miniButton"
          hidden={CurrentScreen === undefined}
          onClick={() => {
            handleToggle();
            onClick(index);
          }}
        >
          {name}
        </button>
      </div>
    );
  });

  console.log(`Screen renders!! ${fade}`);

  return (
    <div className="start-container ">
      {CurrentSceen ? (
        <CurrentSceen />
      ) : (
        <div>
          The component {CurrentScreen.component} has not been created yet.
        </div>
      )}
      <div className={fadeAnimation} onAnimationEnd={() => setFade(true)}>
        <div className="text">{arr[count].text}</div>
        {buttons}
      </div>
    </div>
  );
};

export default Screen;
