import React from "react";
import cards from "../../data/cardData";
import chart from "../../assets/chart.png";
import bg from "../../assets/bg.svg";

export default function UnlockingSolutions() {
    return (
        <section
            className="relative text-gray-800 overflow-hidden py-16 md:py-24 mx-4 sm:mx-6 md:mx-10 lg:mx-30 rounded-2xl bg-cover bg-center bg-no-repeat mt-20"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="relative max-w-full mx-auto w-full px-4 sm:px-6 md:px-10">
                <div className="text-center mb-3">
                    <span className="text-sm font-semibold uppercase text-[#0072ff] tracking-wide border-start rounded-full px-4 py-1 inline-block">
                        What we do
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
                    <span className="color">Unlocking Solutions</span>{" "}
                    <span className="text-gray-900 font-medium">
                        for Digital Challenges
                    </span>
                </h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 md:mb-16">
                    Collaboratively Achieving Concrete Results: Addressing Digital
                    Challenges with Tailored Expertise and Skill.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {cards.map((item, index) => (
                            <div
                                key={item.id}
                                className={`border-start rounded-2xl p-6 bg-white/90 backdrop-blur-sm transition-all duration-300
          ${index === 2 ? "sm:col-span-2 w-full" : ""}
        `}
                            >
                                <div className="flex flex-col items-start text-left space-y-3">
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-10 h-10 object-cover"
                                        loading="lazy"
                                        draggable={false}
                                    />
                                    <h3 className="text-lg font-semibold color">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed text-justify">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <img
                            src={chart}
                            alt="Chart illustration"
                            className="w-full max-w-lg rounded-2xl"
                            loading="lazy"
                            draggable={false}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
