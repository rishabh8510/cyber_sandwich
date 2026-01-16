import about from "../assets/services.png";
import ServiceTab from "../components/ServiceTab";


export default function Services() {
    return (
        <>
            <section className="w-full bg-hero-gradient  pt-32  pb-24 rounded-b-[30px]">
                <div className="max-w-full lg:px-30 mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* ================= LEFT TEXT ================= */}
                    <div className="w-full lg:w-1/2 space-y-5">
                        <h1 className="text-4xl md:text-6xl  leading-tight">
                            <span className="color font-[700]">
                                Your Partner in
                            </span>
                            <br />
                            <span className="text-gray-900 font-extrabold">Digital Innovation</span>
                            <br />
                            <span className="text-gray-900">Everyone</span>
                        </h1>
                        <p className="text-justify">We’re dedicated to providing top-notch services tailored to meet your needs. With a commitment to excellence and a passion for innovation, we strive to exceed your expectations in every aspect.</p>
                    </div>

                    {/* ================= RIGHT IMAGE ================= */}
                    <div className="w-full lg:w-1/2 flex justify-end">
                        <div className="relative w-[310px] md:w-[400px] lg:w-[600px] ">
                            <img
                                src={about}
                                alt="about"
                                className="w-full h-[400px] rounded-4xl"
                                draggable={false}
                            />


                        </div>
                    </div>

                </div>
            </section>

            <ServiceTab />
        </>
    );
}
