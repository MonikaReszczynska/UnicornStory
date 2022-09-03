import "./screen3.css";
import { ReactComponent as Bush } from "../assets/icons/bush.svg";
import { ReactComponent as Unicorn } from "../assets/icons/main-unicorn.svg";
import { ReactComponent as Potato } from "../assets/icons/potato.svg";
import { ReactComponent as Monster } from "../assets/icons/monster.svg";

const Sceen3 = () => {
  return (
    <div className="scene3-container">
      <div className="path--3">
        <Unicorn className="unicorn--3" />
      </div>
      <Bush className="bushes--3"/>
      <Bush className="bushes--3 bush2"/>
      <div className="river">
        <div className="riverStick"></div>
        <div className="riverStick rs2"></div>
        <div className="riverStick rs3"></div>
        <div className="riverStick rs4"></div>
      </div>
      <div className="bridge-container">
          <Monster className="monster" />
        <div className="bridge">
        </div>
      </div>
      <div className="field--3">
        <Potato className="potato" />
      </div>
    </div>
  );
};

export default Sceen3