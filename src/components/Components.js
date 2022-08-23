import React from "react";

import Sceen from "../sceens/Sceen";
import Sceen1 from "../sceens/Sceen1";
import Sceen2 from "../sceens/Sceen2";
import Sceen3 from "../sceens/Sceen3";
import Sceen4 from "../sceens/Sceen4";
import Sceen5 from "../sceens/Sceen5";
import Sceen6 from "../sceens/Sceen6";
import Sceen7 from "../sceens/Sceen7";
import Sceen8 from "../sceens/Sceen8";
import Sceen9 from "../sceens/Sceen9";

const Components = {
  sceen: Sceen,
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

export default (block) => {
//   component does exist

  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block._id,
      block: block,
    });
}
  // component doesn't exist yet

  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,

    { key: block._id }
  );
};

// export default Components
