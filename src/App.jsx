import Navbar from "../src/LandingPage/Navbar/Navbar";
// import SignupAvatar from "./SignupAvatar/SignupAvatar";
import Hero from "../src/LandingPage/Hero/Hero.jsx";
import About from "../src/LandingPage/About/About";
import Footer from "../src/LandingPage/Footer/Footer";

// import Dashboard from "./Dashboard/Dashboard";

import Dashboard from "C:/Users/shivr/OneDrive/Desktop/erp-frontend-v1.0/src/Dashboard/Dashboard";

export default function App() {
  return (
    <>
      <div className="landingPage">
        <Navbar />
        <Hero />
        <About />
        <Footer />
      </div>

      <div className="dashboard">
        <Dashboard />
      </div>
    </>
  );
}

{
  /* <SignupAvatar /> */
}
