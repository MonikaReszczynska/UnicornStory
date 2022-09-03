import "./screen6.css";
import { ReactComponent as Unicorn } from "../assets/icons/main-unicorn.svg";
import { ReactComponent as Potato } from "../assets/icons/potato.svg";

const Sceen6 = () => {
  return (
    <div className="flex-container--6">
      <div className="field--6">
        <Potato className="potato--6" />
      </div>
      <div className="unicornContainer">
        <Unicorn className="unicorn--6"/>
      </div>
      <div className="field--6">
        <Potato className="potato--6" />
      </div>
    </div>
  );
};

export default Sceen6