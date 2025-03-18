
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center my-20">
        <div className="text-center px-6">
          <h1 className="text-6xl font-black mb-6 text-canucci-dark animate-fadeIn">404</h1>
          <p className="text-xl font-light mb-8 text-balance animate-slideUp">
            Hoppsan! Vi kunde inte hitta sidan du söker.
          </p>
          <Link 
            to="/" 
            className="px-8 py-3 bg-canucci-dark hover:bg-canucci-red text-white rounded-full transition-all-300 inline-block animate-fadeIn"
          >
            Tillbaka till startsidan
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
