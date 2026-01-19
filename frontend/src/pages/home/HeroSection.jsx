import heroGraphic from "../../assets/bg-hero.webp";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      
      {/* Main Container */}
      <div className="max-w-[1600px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-5 sm:px-8 md:px-12 lg:px-20 py-14 lg:py-24 gap-14">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight">
            <span className="color font-semibold">
              Enterprise Web & Mobile
            </span>
            <br />
            <span className="font-extrabold">App Development</span>
            <br />
            <span className="font-medium">Company</span>
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto lg:mx-0">
            Top Enterprise Web & Mobile App Development Company. Boost your business with our expert solutions. Contact us for innovative web and mobile apps.
          </p>

          <NavLink to="/contact">
            <button className="inline-flex items-center gap-2 mt-4 text-white font-medium px-8 py-3 rounded-lg gradient-bg hover:opacity-90 transition-all">
              Contact Us
              <span className="text-lg">↗</span>
            </button>
          </NavLink>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div
            className="
              relative 
              w-[220px] 
              sm:w-[280px] 
              md:w-[340px] 
              lg:w-[420px] 
              xl:w-[520px] 
              2xl:w-[600px]
            "
          >
            <img
              src={heroGraphic}
              alt="Hero Graphic"
              className="w-full h-auto object-contain"
              draggable={false}
            />

            {/* Glow Effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-orange-200 via-white to-purple-200 blur-3xl opacity-70"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
