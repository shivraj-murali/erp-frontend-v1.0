import React, { useState } from "react";

function OTPAuthentication() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleAuthenticate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://erp-auth.onrender.com/employee/authotp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp }),
        }
      );
      const data = response.json();
      console.log(data);

      if (response.sucess) {
        setAuthenticated(true);
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>OTP Authentication</h2>
      {!authenticated ? (
        <form onSubmit={handleAuthenticate}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>OTP:</label>
            <input type="text" value={otp} onChange={handleOtpChange} />
          </div>
          <button type="submit">Authenticate</button>
        </form>
      ) : (
        <p>Authenticated successfully!</p>
      )}
    </div>
  );
}

export default OTPAuthentication;