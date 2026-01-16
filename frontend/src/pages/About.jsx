import about from "../assets/about1.jpg";
import MarketingSection from "../components/MarketingSection";
import Testimonials from "../components/Testimonials";

export default function About() {
  return (
<>
    <section className="w-full bg-hero-gradient  lg:pt-32 pb-24 rounded-b-[30px]">
      <div className="max-w-full lg:px-30 mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* ================= LEFT TEXT ================= */}
        <div className="w-full lg:w-1/2 space-y-5">
          <h1 className="text-4xl md:text-6xl  leading-tight">
            <span className="color font-[700]">
              Empowering
            </span>
            <br />
            <span className="text-gray-900 font-extrabold">Business Through</span>
            <br />
            <span className="text-gray-900">Technology</span>
          </h1>

          <p className=" text-sm md:text-base w-[90%] text-justify">
            Welcome to Cyber Sandwich, where innovation meets excellence.  
            At Cyber Sandwich, we are passionate about leveraging the latest 
            advancements in technology to empower businesses and individuals 
            to thrive in the digital age.
          </p>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[310px] md:w-[400px] lg:w-[600px] ">
            <img
              src={about}
              alt="about"
              className="w-full h-auto rounded-4xl"
              draggable={false}
            />

           
          </div>
        </div>

      </div>
    </section>

    <MarketingSection />
    <Testimonials />
</>
  );
}
