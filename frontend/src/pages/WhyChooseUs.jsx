import React from "react";
import { NavLink } from "react-router-dom";

const reasons = [
  "96% Satisfaction and 95% Repeat Business",
  "A History of Over 20 Years in the Tech Industry",
  "A Full Spectrum of Services & Solutions",
  "Transparent & Time-Tested Development Processes",
  "Over 350 Elite Talent",
  "ISO-9001 and ISO-27001 Certified Company",
  "Seamless Communication and Collaboration with Clients",
  "Commitment to Quality & Result-oriented Approach",
  "Effective Project Management",
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Why <span className="color">Choose</span> Us</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            As a top-tier software development outsourcing company based in
            Vietnam, what sets Cyber Sandwich  apart from other service
            providers is our focus on quality, integrity, and long-term values.
            We don’t just build software; we engineer excellence and innovation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            At our core, we align with your vision and long-term goals to tailor
            custom solutions that not only meet but also exceed your
            expectations. We pledge an unwavering commitment to quality and
            shared success.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            At Cyber Sandwich, we value talent. Our specialist team is the
            driving force behind our success. Partner with us; you will work
            with the right team, the right people, and the right expertise.
          </p>

          <NavLink to="/contact">
            <button className="inline-flex items-center gap-2 mt-4 text-white font-medium px-6 py-2 rounded-lg gradient-bg hover:opacity-90 transition-all">
              Get Started Now
              <span className="text-lg ml-3">↗</span>
            </button>
          </NavLink>
        </div>

        {/* Right Content */}
        <div className="space-y-4">
          {reasons.map((text, index) => (
            <div
              key={index}
              className="flex items-center gap-6 px-6 py-4 rounded-full bg-white shadow-md"
            >
              <div className="text-xl font-bold bg-clip-text text-transparent color">
                {(index + 1).toString().padStart(2, "0")}
              </div>
              <p className="font-medium text-gray-800">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;