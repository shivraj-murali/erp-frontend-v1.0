import React from "react";
import { useState } from "react";

import axios from "axios";

const SignupAvatar = () => {
  const [imageSrc, setImageSrc] = useState(
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  );

  const [name, setName] = useState("John Doe");
  return (
    <>
      <div className="AvatarSection flex">
        {/* <p className="justify-center">{name}</p> */}
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white font-playfair"
          src={imageSrc}
          alt=""
        />
      </div>
    </>
  );
};

export default SignupAvatar;