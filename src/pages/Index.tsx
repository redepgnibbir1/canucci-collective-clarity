
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Testimonials />
      <About />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
