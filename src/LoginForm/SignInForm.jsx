import { useState } from "react";

import { Link, useNavigation } from "react-router-dom";
import "./SignInForm.css";

function SignInForm() {
  const navigate = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://erp-auth.onrender.com/employee/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        console.log("Sign-in successful");
      } else {
        console.error("Sign-in failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="text-color">
      <h2 className="text-black">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Sign In </button>
        <p>
          <Link to="/forgotpassword">Forgot Password?</Link>
        </p>
      </form>
    </div>
  );
}

export default SignInForm;
