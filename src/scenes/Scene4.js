import "./screen4.css";
import { ReactComponent as Unicorn } from "../assets/icons/main-unicorn.svg";
import { ReactComponent as Lines } from "../assets/icons/branches.svg";

const Eyes = () => {
  return (
    <div className="eyes">
      <div className="eye"></div>
      <div className="eye eye2"></div>
    </div>
  )
}

const Sceen4 = () => {
  return (
    <div className="scene4-container">
      <Lines className="branches branch1" />
      <Lines className="branches branch2" />
      <Eyes />
      <div className="path--4">
        <Unicorn className="unicorn--4"/>
      </div>
    </div>
  );
};

export default Sceen4