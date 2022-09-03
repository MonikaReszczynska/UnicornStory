import "./screen5.css";
import { ReactComponent as Narwhal } from "../assets/icons/narwhal-2.svg";
import { ReactComponent as Octopus } from "../assets/icons/octopus.svg";
import { ReactComponent as Fish } from "../assets/icons/fish.svg";
import { ReactComponent as Unicorn } from "../assets/icons/main-unicorn.svg";

export const School = () => {
  return (
    <div className="school">
          <Fish className="fish f1"/>
          <Fish className="fish f2"/>
          <Fish className="fish f3"/>
          <Fish className="fish f4"/>
          <Fish className="fish f5"/>
          <Fish className="fish f6"/>
          <Fish className="fish f7"/>
          <Fish className="fish f8"/>
          <Fish className="fish f9"/>
        </div>
  )
}

const Sceen5 = () => {
  return (
    <div className="scene5-container">
        <Octopus className="cthulhu"/>
        <School />
        <div className="narwhals">
          <Narwhal className="narwhal--2 n3" />
          <Narwhal className="narwhal--2 n4" />
          <Narwhal className="narwhal--2 n5" />
        </div>
        <Unicorn className="unicorn--5"/>
    </div>
  );
};

export default Sceen5