import React from "react";
import pricingData from "../data/pricingData.json";
import checkIcon from "../assets/right.svg";

export default function PricingPage() {
    return (
        <div className="w-full px-4 md:px-16 lg:px-40 py-12">

            <div className="flex justify-center mb-3">
                <p className="text-md text-[#0072ff] font-semibold border-start rounded-full px-3 py-1 text-center">
                    Setu Software
                </p>
            </div>


            <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
                Pricing <span className="color">Plans</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {pricingData.map((item, index) => {
                    const isTop = index < 2;

                    return (
                        <div key={index} className="relative h-full flex flex-col">

                            {/* ===== HEADING ===== */}
                            <div
                                className={`w-full px-6 py-4 text-white text-lg font-semibold
                                    rounded-t-2xl shadow-lg relative z-10
                                    ${isTop
                                        ? "gradient-bg"
                                        : "bg-black"
                                    }
                                `}
                            >
                                {item.title}
                            </div>

                            {/* ===== BODY ===== */}
                            <div
                                className={`
                                    rounded-2xl p-6 -mt-3 relative z-20 flex flex-col justify-between
                                    ${isTop ? "bg-black" : ""}
                                `}
                                style={{
                                    minHeight: "310px",
                                    background: !isTop
                                        ? "linear-gradient(155deg, #0072ff 20%, #FFFFFF 100%)"
                                        : "black",
                                }}
                            >
                                <div>
                                    <h2 className="text-white text-3xl font-bold">
                                        {item.price}
                                    </h2>

                                    <ul className="mt-4 space-y-3 text-sm text-gray-200">
                                        {item.features.map((feature, i) => (
                                            <li key={i} className="flex gap-2 items-start">

                                                {/* 👇 Replaced Check icon with IMAGE */}
                                                <img
                                                    src={checkIcon}
                                                    alt="check"
                                                    className="w-4 h-4 mt-1"
                                                />

                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>

                        </div>
                    );
                })}
            </div>

        </div>
    );
}
