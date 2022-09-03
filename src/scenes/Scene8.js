import "./screen8.css";
import { ReactComponent as Unicorn } from "../assets/icons/main-unicorn.svg";
import { ReactComponent as Tree } from "../assets/icons/tree1.svg";
import { ReactComponent as Fairy } from "../assets/icons/fairy.svg";

const Sceen8 = () => {
  return (
    <div className="grid-container--8">
      <div className="div1">
        <Tree className="bush--8" />
      </div>
      <div className="div2">
        <Tree className="bush--8" />
      </div>
      <div className="div3">
        <Tree className="tree--8 " />
        <Fairy className="fairy"/>
      </div>
      <div className="div4">
        <Unicorn className="unicorn--8" />
      </div>
    </div>
  );
};

export default Sceen8;
