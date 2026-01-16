import Setu from "../../assets/website.jpg";
import SharedCard from "../../components/SharedCard";
import Data from "../../data/websiteData";
import ContactSection from "../../components/ContactSection";
import Testimonials from "../../components/Testimonials";
import { NavLink } from "react-router-dom";

export default function WebsiteDesign() {
    return (
        <>
            <section className="w-full bg-hero-gradient  pt-32  pb-24 rounded-b-[30px]">
                <div className="max-w-full lg:px-30 mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* ================= LEFT TEXT ================= */}
                    <div className="w-full lg:w-1/2 space-y-5">
                        <h1 className="text-4xl md:text-6xl leading-tight">
                            <span className="color font-[700]">
                                Website
                            </span> <br />
                            <span className="text-gray-900 font-extrabold ml-2">
                                Designing
                            </span>
                        </h1>

                        <p className="text-justify">At Cyber Sandwich, we recognize the pivotal role a website plays in defining your online presence. Our website designing services are crafted with precision and creativity to ensure that your digital footprint leaves a lasting impression on your audience.</p>
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
