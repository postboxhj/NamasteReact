import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  {},
  [React.createElement("h1", {}, "Hello world!"),
  React.createElement("h1", {}, "Hello JavaScript!"),
  React.createElement("h1", {}, "Hello React!")]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
