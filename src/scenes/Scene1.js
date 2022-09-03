import React from "react";
import { ReactComponent as Trees } from "../assets/icons/trees.svg";
import { ReactComponent as Trees2 } from "../assets/icons/trees2.svg";
import { ReactComponent as Flower } from "../assets/icons/flower.svg";
import "./screen1.css";import { ReactComponent as Unicorn } from "../assets/icons/main-unicorn.svg";

import "./fireworks.css";

const Firework = () => {
  return (
      <div className="firework">
        <div className="before2"></div>
        <div className="after2"></div>
      </div>
  );
};

const Sceen1 = () => {
  return (
    <div className="scene1-container">
      <div className="sun"></div>
      <div className="cloud c1"></div>
      <div className="cloud c2"></div>
      <div className="cloud c3"></div>
      <div className="land l1"></div>
      <div className="land l2"></div>
      <Trees className="tree" />
      <Trees2 className="tree2" />
      <div className="field--1">
        <Unicorn className="main-unicorn"/>
      </div>
      <Flower className="flower f1" />
      <Flower className="flower f2" />
      <Flower className="flower f3" />
      <Flower className="flower f4" />
      <Flower className="flower f5" />
      <Firework/>
    </div>
  );
};

export default Sceen1;
