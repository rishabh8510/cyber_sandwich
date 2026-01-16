import about from "../assets/payment.png";
import QR from "../components/Qr";


export default function Payment() {
    return (
        <>
            <section className="w-full bg-hero-gradient  pt-32 lg:pt-0 pb-24 rounded-b-[30px]">
                <div className="max-w-full lg:px-30 mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* ================= LEFT TEXT ================= */}
                    <div className="w-full lg:w-1/2 space-y-5">
                        <h1 className="text-4xl md:text-7xl  leading-tight">
                            <span className="color font-[700]">
                                Easy Payment
                            </span>
                            <br />
                            <span className="text-gray-900 font-extrabold">Options For</span>
                            <br />
                            <span className="text-gray-900">Everyone</span>
                        </h1>

                        {/* <button className="mt-6 flex items-center gap-2 text-white font-medium px-10 py-2 rounded-lg transition-all hover:opacity-90 bg-[radial-gradient(ellipse_at_bottom,#FFFFFF_0%,#FB3800_40%)]">
                            Online Payment Gateway
                            <span className="text-lg">↗</span>
                        </button> */}
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

            {/* <QR /> */}
        </>
    );
}
