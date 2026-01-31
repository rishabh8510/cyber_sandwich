import React from "react";
import { ChevronRight } from "lucide-react";
import servicesData from "../data/servicesData";
import service from "../assets/service.jpg"

export default function ServicesSection() {
    return (
        <section className="bg-white py-16 px-6 md:px-12 lg:px-40">
            <div className="mb-10 text-center">
                <p className="text-sm text-color font-semibold border-start rounded-full px-4 py-1.5 inline-block mb-3">
                    Our Services
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Welcome to <span className="color">Our Services</span>
                </h2>
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

            <div className="flex flex-col md:flex-row items-center justify-between max-w-full mx-auto py-16 gap-10">
                <div className="w-full md:w-1/2">
                    <img
                        src={service}
                        alt="Team working together"
                        className="w-full h-full rounded-xl object-cover"
                        draggable={false}
                    />
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl  leading-snug mb-4">
                        Transform Your Business <br /><span className="color font-semibold">With Cyber Sandwich</span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                        Empower your business with Cyber Sandwich comprehensive suite of digital solutions. From digital marketing and website designing to  solutions and virtual assistant services, we offer innovative strategies and cutting-edge technologies to help you achieve your business goals. With our expertise and dedication to excellence, we partner with you to drive growth, streamline operations, and enhance your digital presence.
                    </p>
                </div>
            </div>
        </section>
    );
}
