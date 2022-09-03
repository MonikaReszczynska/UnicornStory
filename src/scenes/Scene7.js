import "./screen7.css";
import { ReactComponent as Palace } from "../assets/icons/palace.svg";
import { ReactComponent as Coral } from "../assets/icons/coral.svg";
import { ReactComponent as Fish } from "../assets/icons/fish.svg";
import { ReactComponent as Unicorn } from "../assets/icons/main-unicorn.svg";


const Sceen7 = () => {
  return (
    <div className="grid-container--7">
      <Fish className="school--2" />
      <Coral className="t1"/>
      <Coral className="t2"/>
      <div className="t2"></div>
      <Palace className="cst">
      </Palace>
      <div className="t3">
        <Unicorn className="unicorn--7"/>
      </div>
    </div>
  );
};

export default Sceen7