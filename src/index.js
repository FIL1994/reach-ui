import React from "react";
import ReactDOM from "react-dom";
import Tooltip from "@reach/tooltip";
import "@reach/tooltip/styles.css";
import "./index.css";

const label = "this is my tooltip";

ReactDOM.render(
  <>
    <div
      style={{
        position: "fixed",
        right: 55
      }}
    >
      has enough space: &nbsp;
      <Tooltip label={label}>
        <button>test</button>
      </Tooltip>
    </div>
    <div
      style={{
        position: "fixed",
        right: 40,
        top: 40
      }}
    >
      intersects with scrollbar: &nbsp;
      <Tooltip label={label}>
        <button>test</button>
      </Tooltip>
    </div>
    <div
      style={{
        position: "fixed",
        right: 10,
        top: 75
      }}
    >
      moves to the left: &nbsp;
      <Tooltip label={label}>
        <button>test</button>
      </Tooltip>
    </div>
  </>,
  document.getElementById("root")
);
