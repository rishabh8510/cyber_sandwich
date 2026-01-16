import aiChip from "../assets/aichip.jpg";
import rocket from "../assets/rocket.jpg";
import innovationIcon from "../assets/innovation.jpg";

export default function MarketingSection() {

    // ======== CARD DATA ARRAY =========
    const features = [
        {
            title: "Innovation",
            desc: "We are committed to staying at the forefront of technology and innovation, constantly seeking new ways to drive value for our clients.",
            icon: innovationIcon,
        },
        {
            title: "Excellence",
            desc: "We strive for excellence in everything we do, from the quality of our services to the level of support we provide to our clients.",
            icon: innovationIcon,
        },
        {
            title: "Integrity",
            desc: "We conduct business with the highest standards of integrity, honesty, and transparency, building trust with our clients and partners.",
            icon: innovationIcon,
        },
        {
            title: "Collaboration",
            desc: "We believe in the power of collaboration and teamwork, working closely with our clients to achieve shared goals and objectives.",
            icon: innovationIcon,
        },
    ];

    return (
        <section className="w-full py-20 px-6 lg:px-40 max-w-full mx-auto">

            {/* ==================== TOP SECTION ==================== */}
            <div className="grid lg:grid-cols-2 gap-14 items-center">

                {/* Left Image */}
                <div className="w-full">
                    <img
                        src={aiChip}
                        alt="AI Chip"
                        className="rounded-2xl  w-full object-cover"
                    />
                </div>

                {/* Right Dynamic Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="p-5 bg-gray-100 rounded-xl flex items-start gap-4"
                        >
                            <div>
                                <div className="flex items-center gap-4 mb-3">
                                    <img src={item.icon} className="w-10" />
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm text-justify">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* ==================== BOTTOM SECTION ==================== */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">

                {/* Text Section */}
                <div>
                    <h2 className="text-3xl md:text-5xl  leading-snug">
                        We’re a leader in <br />
                        <span className="color font-bold">Digital Marketing</span> <br />
                        Solutions
                    </h2>

                    <p className="text-gray-600 mt-4 text-justify">
                        After years of experience, we have learned that each marketing channel has its own unique advantages, but they work best when strategically combined with other channels. Therefore, we provide our clients with full-service strategies that utilize a comprehensive mix of digital channels to enhance visibility, boost conversions, and drive revenue.
                    </p>

                {/* <button className="mt-6 flex items-center gap-2 text-white font-medium px-14 py-1 rounded-lg transition-all hover:opacity-90 bg-[radial-gradient(ellipse_at_bottom,#FFFFFF_0%,#FB3800_40%)]">
                    View
                    <span className="text-lg">↗</span>
                </button> */}
                </div>

                {/* Right Rocket Image */}
                <div>
                    <img
                        src={rocket}
                        alt="Rocket Image"
                        className="w-full rounded-2xl "
                    />
                </div>

            </div>

        </section>
    );
}
