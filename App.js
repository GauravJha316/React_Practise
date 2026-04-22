import React from "react"
// const heading= React.createElement("h1",{id:"headind"},"Hello world from react");
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

/**
 * <div id="parent">
 *   <div id="child">
 *     <h1>I'm h1 tag</h1>
 *   </div>
 * </div>
 */
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm an h1 tag")
//   )
// );

// console.log(parent)
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent)

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h2 tag")
    ]
  )
);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

