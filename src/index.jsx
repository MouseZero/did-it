import React from "react";
import ReactDOM from "react-dom";

import CreateHabit from "./CreateHabit.jsx";

ReactDOM.render(
  <div style={{ marginTop: "3rem" }} className="container">
    <div className="row">
      <div className="column">
        <CreateHabit />
      </div>
    </div>
  </div>,
  document.getElementById("root")
);
