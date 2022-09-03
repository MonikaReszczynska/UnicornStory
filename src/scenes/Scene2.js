import "./screen2.css";
import { ReactComponent as Unicorn } from "../assets/icons/main-unicorn.svg";
import { ReactComponent as Narwhal } from "../assets/icons/narwhal-1.svg";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import { ReactComponent as Wave1 } from "../assets/icons/wave1.svg";
import { ReactComponent as Wave2 } from "../assets/icons/wave2.svg";
import { ReactComponent as Wave3 } from "../assets/icons/wave3.svg";
import { ReactComponent as Umbrella } from "../assets/icons/umbrella.svg";

const Sceen2 = () => {
  return (
    <div className="scene2-container">
      <div className="beach">
        <Unicorn className="unicorn--2" />
        <Umbrella className="umbrella u1" />
        <Umbrella className="umbrella u2" />
      </div>
      <div className="narwhals-box">
        <Narwhal className="narwhal n1" />
        <Heart className="heart hrt1" />
        <Narwhal className="narwhal n2" />
        <Heart className="heart hrt2" />
      </div>
    <Wave1 className="wave1" />
    <Wave2 className="wave2" />
    <Wave3 className="wave3" />
    </div>
  );
};

export default Sceen2;
