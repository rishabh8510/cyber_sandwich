import Setu from "../../assets/graphic.jpg";
import SharedCard from "../../components/SharedCard";
import Data from "../../data/graphicData";
import ContactSection from "../../components/ContactSection";
import Testimonials from "../../components/Testimonials";
import { NavLink } from "react-router-dom";

export default function GraphicDesign() {
    return (
        <>
            <section className="w-full bg-hero-gradient  pt-32  pb-24 rounded-b-[30px]">
                <div className="max-w-full lg:px-30 mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* ================= LEFT TEXT ================= */}
                    <div className="w-full lg:w-1/2 space-y-5">
                        <h1 className="text-4xl md:text-6xl leading-tight">
                            <span className="color font-[700]">
                                Graphic
                            </span> <br />
                            <span className="text-gray-900 font-extrabold ml-2">
                                Designing
                            </span>
                        </h1>

                        <p className="text-justify">Graphic design plays a crucial role in shaping the visual identity of your brand and capturing the attention of your audience. At Cyber Sandwich, we offer professional graphic designing services aimed at helping businesses stand out in today’s competitive marketplace.</p>

                        <NavLink to="/contact">
                            <button className="mt-6 flex items-center gap-2 text-white font-medium px-10 py-2 rounded-lg transition-all hover:opacity-90 gradient-bg cursor-pointer">
                                Contact Us
                                <span className="text-lg">↗</span>
                            </button>
                        </NavLink>
                    </div>

                    {/* ================= RIGHT IMAGE ================= */}
                    <div className="w-full lg:w-1/2 flex justify-end">
                        <div className="relative w-[310px] md:w-[400px] lg:w-[600px] ">
                            <img
                                src={Setu}
                                alt="about"
                                className="w-full h-[400px] rounded-4xl"
                                draggable={false}
                            />


                        </div>
                    </div>

                </div>


            </section>

            <SharedCard data={Data} />
            <Testimonials />
            <ContactSection />
        </>
    );
}
