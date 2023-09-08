import React from "react";

const Hero = () => {
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
          <button className="font-jakarta rounded-full bg-buttoncta border-white border-2 px-6 align-middle py-1 mr-7 hover:scale-90">
            <a href="#About">Signup Now</a>
          </button>
          <button className="font-jakarta rounded-full bg-inherit border-white border-2 px-6 py-1 hover:scale-90">
            <a href="#About">Learn More &darr;</a>
          </button>
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
