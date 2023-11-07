// import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onClick }) => {
  const navigate = useNavigate();

  const reDirect = () => {
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between bg-gray-500 p-4 bg-mainBg pr-2 text-2xl ">
      {/* First div with logo */}
      <div className="font-playfair ml-4 text-white">Employee Hub</div>

      {/* Third div with SVG and button */}
      <div className="mr-4 flex"></div>
    </nav>
  );
};

export default Navbar;
