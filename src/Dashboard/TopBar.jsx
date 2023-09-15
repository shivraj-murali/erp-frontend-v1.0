import React from "react";
import SignupAvatar from "./SignupAvatar";

const TopBar = () => {
  return (
    <div className=" border-lightBg border-b-2 ">
      <div className="Topbar flex justify-between pt-4 pb-2 font-jakarta text-xl px-7 text-white">
        <h1 className="font-playfair">Logo</h1>
        <SignupAvatar />
      </div>
    </div>
  );
};

export default TopBar;
