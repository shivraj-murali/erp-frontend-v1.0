import React from "react";

const Hero = () => {
  return (
    <div
      className="Hero grid grid-cols-2  place-content-between px-7 py-12 bg-mainBg h-screen"
      id="Home"
    >
      <div className="writeup text-white">
        <p className="font-playfair text-7xl">
          Supercharge <br /> Your Growing <br />
          Business
        </p>
        <p className="jakarta text-4xl mt-5 ">
          with the ultimate ERP tool <br /> for your business
        </p>
        <div className="cta-button my-8 text-xl align-middle">
          <button className="rounded-full bg-buttoncta border-white border-2 px-6 align-middle py-1 mr-7 hover:scale-90">
            Signup Now
          </button>
          <button className="rounded-full bg-inherit border-white border-2 px-6 py-1 hover:scale-90">
            Learn More &darr;
          </button>
        </div>
      </div>
      <div>
        <img
          src={"src/Hero/erpImage.png"}
          alt=""
          className="w-full h-auto p-0 m-0 pt-7 align-middle"
        />
      </div>
    </div>
  );
};

export default Hero;
