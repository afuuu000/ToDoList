import React from "react";

import Home from "../Pages/Home";
import Card1 from "./Card";
import { Link } from "react-router-dom";
import Login from "../Pages/SignUp";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap bg-gray-800 text-white justify-evenly list-none p-4 text-lg font-bold ">
      <li className="hover:text-violet-700 hover:scale-125">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-violet-700 hover:scale-125">
        <Link to="/products">Products</Link>
      </li>
      <li className="hover:text-violet-700 hover:scale-125 justify-end">
        <Link to="/login">Login/SignUp</Link>
      </li>
      <li className="hover:text-violet-700 hover:scale-125 justify-end">
        <Link to="/category">Category</Link>
      </li>
    </nav>
  );
}
