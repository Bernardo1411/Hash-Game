import React from "react";
import "./button.css";

export default (props) => (
  <button onClick={(e) => props.click()}>Restart</button>
);
