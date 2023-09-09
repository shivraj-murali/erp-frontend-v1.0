import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const TempLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    email,
    password,
  };

  async function onSubmit(e) {
    e.preventDefault();
    const res = await axios.post(
      "https://erp-auth.onrender.com/employee/signin",
      data
    );
    const emp_id = res.data.emp_id;
    console.log(res.data.emp_id);
    localStorage.setItem("emp_id", emp_id);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <br />
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TempLogin;
