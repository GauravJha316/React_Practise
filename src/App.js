import React, {lazy,Suspense} from "react"
import ReactDOM from "react-dom/client";
import Header from './components/Header.js'
import Body from "./components/Body.js";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom"
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
// import Grocery from "./components/Grocery.js";
//component composition 

//chunking
//code splitting
//dynamic bundling
//lazy loading
//on demand loading

const Grocery=lazy(()=> import("./components/Grocery.js"))



const AppLayout =() =>{
  return(
    <div className="app">
      <Header/>   
      <Outlet/>
    </div>
  )
}
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
    {
    path:"/",
    element:<Body/>,
  },
    {
    path:"/about",
    element:<About/>,
  },
  {
    path:"/contact",
    element:<Contact/>,
  },
  {
    path:"/grocery",
    element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
  },
  {
    path:"restaurants/:resId",
    element:<RestaurantMenu/> 
  }
    ],
    errorElement:<Error/>, 
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

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

