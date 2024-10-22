import rocket from '../assets/rocket.png';
import model from '../assets/model.png';
import Footer from "./Footer";
import Header from "./Header";
import { Link } from 'react-router-dom'; 

const Hero = () => {
  return (
    <>
      <Header />
      <div className="bg-[url('./assets/heroBg.jpg')] bg-cover bg-center min-h-screen">
        {/* Adjusted padding for spacing between header and hero */}
        <div className="container mx-auto px-4 md:px-10 lg:px-20 py-24 flex justify-between items-center">
          {/* Left Content */}
          <div className="text-white max-w-lg">
            <h6 className="text-lg mb-4">Software Development & Consultancy</h6>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Business Innovation <br /> Through Technology
            </h1>
            <p className="text-[#B6B9C0] mb-8">
              Leading Business Evolution with Tailored and Innovative Software Solutions for Sustainable Growth
            </p>
            <div className="flex space-x-4">
              <button className="cursor-pointer text-white px-6 py-3 rounded-lg outline outline-2 outline-btColor bg-btColor hover:bg-white hover:text-black transition-all">
                Let's Talk &rarr;
              </button>
              <button className="cursor-pointer text-white px-6 py-3 rounded-lg outline outline-2 outline-btColor bg-btColor hover:bg-white hover:text-black transition-all">
                Read More &rarr;
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
          <img src={rocket} alt="" className='absolute top-1/4 right-3/4 animate-[spin_10s_linear_infinite]' />
            <img 
              src={model} 
              alt="Model Image" 
              className="max-h-[90vh] object-cover" 
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Hero;
