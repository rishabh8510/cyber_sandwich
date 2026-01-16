import Setu from "../../assets/image.jpg";
import SharedCard from "../../components/SharedCard";
import Data from "../../data/aiImageData";
import ContactSection from "../../components/ContactSection";
import Testimonials from "../../components/Testimonials";

export default function AiImage() {
    return (
        <>
            <section className="w-full bg-hero-gradient  pt-32  pb-24 rounded-b-[30px]">
                <div className="max-w-full lg:px-30 mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* ================= LEFT TEXT ================= */}
                    <div className="w-full lg:w-1/2 space-y-5">
                        <h1 className="text-4xl md:text-6xl leading-tight">
                            <span className="text-[#FB3800] font-[700]">
                                AI
                            </span> Image<br/>
                            <span className="text-gray-900">
                                Text to Voice
                            </span>
                        </h1>

                        <p className="text-justify">Software Setu offers cutting-edge Image Generator services powered by advanced artificial intelligence (AI) technology. Our Image Generator service allows you to create stunning visuals, illustrations, and designs with ease, revolutionizing the way you bring your ideas to life.</p>

                        <button className="mt-6 flex items-center gap-2 text-white font-medium px-10 py-2 rounded-lg transition-all hover:opacity-90 bg-[radial-gradient(ellipse_at_bottom,#FFFFFF_0%,#FB3800_40%)]">
                            Contact Us
                            <span className="text-lg">↗</span>
                        </button>
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
