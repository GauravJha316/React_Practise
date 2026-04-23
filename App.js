import React from "react"
import React from "react";
import ReactDOM from "react-dom/client";

import React from "react";
import ReactDOM from "react-dom/client";

//component composition 
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);
const elem=<span>React Element</span>
const HeadingComponent = () => (
  <div id="container">
    {elem}

    {2+2}
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

// React.createElement => Object => HTMLElement (render)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

// console.log(heading);

// JSX - HTML-like or XML-like syntax
// const jsxHeading = <h1 id="heading" className="gaurav">Namaste React using JSX 🚀</h1>;

// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
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

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [
//       React.createElement("h1", {}, "I'm an h1 tag"),
//       React.createElement("h2", {}, "I'm an h2 tag")
//     ]
//   )
// );

// console.log(parent); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

