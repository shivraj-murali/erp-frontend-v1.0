// src/components/ForgotPassword.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();

    // Send a request to your API to send an OTP to the provided email
    try {
      const response = await fetch(
        "https://erp-auth.onrender.com/employee/sendotp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setOtpSent(true);
      } else {
        console.error("Failed to send OTP");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {!otpSent ? (
        <form onSubmit={handleSendOtp}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <div>
          <p>OTP sent to {email}. Check your email for the OTP.</p>
          <Link to="/otp-auth">Enter OTP</Link>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
