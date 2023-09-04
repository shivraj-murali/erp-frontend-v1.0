// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInForm from "./components/SignInForm";
import ForgotPassword from "./components/ForgotPassword";
import "./App.css";
import OTPAuthentication from "./components/OTPAuthentication";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-auth" element={<OTPAuthentication />} />
          <Route path="/" element={<SignInForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
