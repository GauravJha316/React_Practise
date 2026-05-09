import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header =() =>{

  const [btnNameReact, setBtnNameReact]=useState("Login");

  const onlineStatus=useOnlineStatus();

  return (
    <div  className="header bg-pink-100 flex justify-between items-center px-5 py-3 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-22"
        src={LOGO_URL}></img>
      </div>
    <div className="flex items-center">
    <ul className="flex p-4 m-4">
      <li className="px-4">Online Status: {onlineStatus ? "✅":"👺"} </li>
      <li className="px-4"><Link to="/">Home</Link></li>
      <li className="px-4"><Link to="/about">About us</Link></li>
      <li className="px-4"> <Link to="/contact">Contact </Link></li>
        <li><Link to="/grocery">Grocery </Link></li>
      <li className="px-4">Cart</li>
      <button className="px-4"
      onClick={()=>{
      btnNameReact ==="Login"
      ?setBtnNameReact("Logout"):setBtnNameReact("Login");
      }}>{btnNameReact}</button>
    </ul>
    </div>
    </div>
  )
}

export default Header;