import About from "./About/About";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";

function LandingPage() {
  return (
    <div className="landingPage">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default LandingPage;
