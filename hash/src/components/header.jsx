import React from "react";
import "./header.css";

export default (props) => (
  <div className="header">
    {props.end ? (
      <h1>{props.name ? "O" : "X"} won!</h1>
    ) : (
      <h1> Player: {props.name ? "X" : "O"}</h1>
    )}
  </div>
);
