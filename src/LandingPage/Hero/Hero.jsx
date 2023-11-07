import React from "react";
import { Link, redirect, useNavigate, useNavigation } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const reDirect = () => {
    navigate("/login");
  };
  return (
    <div
      className="Hero grid grid-cols-2  place-content-between px-7 py-12 bg-mainBg h-[85vh]"
      id="Home"
    >
      <div className="writeup text-white">
        <p className="font-playfair text-7xl">
          Supercharge <br /> Your Growing <br />
          Business
        </p>
        <p className="font-jakarta text-4xl mt-5 ">
          with the ultimate ERP tool <br /> for your business
        </p>
        <div className="cta-button my-8 text-xl align-middle">
          <button
            className="ml-2  py-1 bg-blue-500 text-white hover:bg-blue-600 rounded-full bg-inherit border-white border-2 font-playfair hover:bg-lightMain text-base p-3 "
            onClick={reDirect}
          >
            Employee Login
          </button>
          <a href="https://erp-django.onrender.com/admin/">
            <button className="ml-2  py-1 bg-blue-500 text-white hover:bg-blue-600 rounded-full bg-inherit border-white border-2 font-playfair hover:bg-lightMain text-base p-3">
              Admin Login
            </button>
          </a>
        </div>
      </div>
      <div>
        <img
          src={"src/LandingPage/Hero/erpImage.png"}
          alt=""
          className="w-full h-auto p-0 m-0 pt-7 align-middle"
        />
      </div>
    </div>
  );
};

export default Hero;
