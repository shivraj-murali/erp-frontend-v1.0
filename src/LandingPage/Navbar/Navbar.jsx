// import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Navbar = ({ onClick }) => {

  const navigate=useNavigate()

  const reDirect=()=>{
   navigate("/login")
  }

  return (
    <nav className="flex items-center justify-between bg-gray-500 p-4 bg-mainBg pr-2 text-lg">
      {/* First div with logo */}
      <div className="font-playfair ml-4 text-white">Logo</div>

      <div className="flex justify-center space-x-4 font-semibold font-jakarta">
        <a href="#Home" className="text-white hover:scale-110 mr-4">
          Home
        </a>
        <a href="#About" className="text-white hover:scale-110 mr-4">
          Features
        </a>
        <a href="#" className="text-white hover:scale-110 ">
          About
        </a>
      </div>

      {/* Third div with SVG and button */}
      <div className="mr-4 flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6 mr-3 align-middle mt-1"
          onClick={onClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
        <button className="ml-2  py-1 bg-blue-500 text-white hover:bg-blue-600 rounded-full bg-inherit border-white border-2 font-playfair hover:bg-lightMain text-base p-3 " onClick={reDirect}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
