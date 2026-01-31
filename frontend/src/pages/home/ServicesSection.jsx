import React from "react";
import { ChevronRight } from "lucide-react";
import servicesData from "../../data/servicesData";
import { Link } from "react-router-dom";

export default function ServicesSection() {
    return (
        <section className="bg-white py-16 px-6 md:px-12 lg:px-30">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <p className="text-md text-color font-semibold border-start rounded-full px-3 py-1 inline-block mb-3">
                        Our Services
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        <span className="color">Result-driven</span> digital services
                    </h2>
                </div>
                <Link to="/service">
                    <button className="gradient-bg
        text-white px-6 py-2 rounded-xl hover:bg-orange-700 transition-all flex items-center gap-2">
                        View All Services
                        <span className="text-lg ml-3">↗</span>
                    </button>
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {servicesData.map(({ id, title, description, icon }) => (
                    <div
                        key={id}
                        className="flex items-start gap-4 bg-gray-50   rounded-2xl p-6  transition"
                    >
                        <div className=" p-3 rounded-xl flex-shrink-0">
                            <img
                                src={icon}
                                alt={title}
                                className="w-13 h-12 object-contain"
                                loading="lazy"
                                draggable={false}
                            />
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="font-semibold text-gray-800 text-lg mb-2">
                                {title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {description}
                            </p>
                        </div>
                        {/* <ChevronRight className="text-gray-400 mt-2 flex-shrink-0" size={18} /> */}
                    </div>
                ))}
            </div>
        </section>
    );
}
