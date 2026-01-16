import Setu from "../../assets/algo.jpg";
import SharedCard from "../../components/SharedCard";
import Data from "../../data/algoData";
import PricingPage from "../../components/PricingPage";
import ContactSection from "../../components/ContactSection";
import TradingIntegrationSection from "../../components/TradingIntegrationSection";
import AdvantagesSection from "../../components/AdvantagesSection";

export default function SetuSoftware() {
    return (
        <>
            <section className="w-full bg-hero-gradient  pt-32  pb-24 rounded-b-[30px]">
                <div className="max-w-full lg:px-30 mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* ================= LEFT TEXT ================= */}
                    <div className="w-full lg:w-1/2 space-y-5">
                        <h1 className="text-4xl md:text-6xl leading-tight">
                            <span className="color font-[700]">
                                AI 
                            </span>
                            <span className="text-gray-900 font-extrabold ml-2">
                                Software
                            </span>
                        </h1>

                        <p className="text-justify">Struggling to find experts who really understand your business and can actually drive long term results? Our world-class marketers would love to help your business thrive!</p>

                        <button className="mt-6 flex items-center gap-2 text-white font-medium px-10 py-2 rounded-lg transition-all hover:opacity-90 gradient-bg">
                            Register Now
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
            <PricingPage />
            <TradingIntegrationSection />
            <AdvantagesSection />
            <ContactSection />




        </>
    );
}
