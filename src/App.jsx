import Navbar from "../src/LandingPage/Navbar/Navbar";
import Hero from "../src/LandingPage/Hero/Hero.jsx";
import About from "../src/LandingPage/About/About";
import Footer from "../src/LandingPage/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Dashboard/HomePage";
import ProjectList from "./Dashboard/ProjectList";
import LandingPage from "./LandingPage/LandingPage";
import SignupForm from "./LoginForm/SignupForm";
import Calendar from "./Dashboard/Calendar";
import CreateOTP from "./LoginForm/CreateOTP";
import ForgotPassword from "./ForgotPassword";

export default function App() {
  return (
    <>
      {/* <div className="landingPage">
        <Navbar />
        <Hero />
        <About />
        <Footer />
      </div> */}
      {/* <LandingPage /> */}

      {/* <div className="dashboard">
        <HomePage />
      </div> */}
      {/* <Calendar /> */}
      {/* <ProjectList /> */}
      {/* <SignupForm/> */}
      {/* <div className="Login-Form">
        <Routes>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-auth" element={<OTPAuthentication />} />
          <Route path="/create-pass" element={<CreatePassword />} />
          <Route path="/" element={<SignInForm />} />
        </Routes>
      </div> */}

      {/* <div style={{ backgroundColor: "black" }}>
        <SignupForm />
      </div> */}

      <div>
        <CreateOTP />
      </div>

      {/* <div>
        <ForgotPassword />
      </div> */}
    </>
  );
}
