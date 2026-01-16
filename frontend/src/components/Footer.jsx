import React from "react";
import footerBg from "../assets/footer.jpg";
import cardBg from "../assets/header.jpg";
import contactImg from "../assets/certification.jpg";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative text-white bg-black w-full mt-20">
      {/* ===== Curved Background at Top ===== */}
      <div
        className="absolute top-0 left-0 w-full h-[200px] sm:h-[220px] bg-no-repeat bg-center bg-cover z-[1]"
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      ></div>

      {/* ===== Floating Card Above Curve ===== */}
      <div className="relative z-[2] flex justify-center -top-16 sm:-top-20 px-4 sm:px-6 md:px-0">
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%]">
          <div
            className="relative text-black rounded-2xl shadow-2xl px-4 sm:px-8 md:px-10 py-8 sm:py-10 bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{
              backgroundImage: `url(${cardBg})`,
            }}
          >
            {/* Text & Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <h2 className="text-base sm:text-lg md:text-2xl lg:text-4xl font-semibold leading-snug">
                <span className="color font-bold">
                  See how we can help your
                </span>{" "}
                <br className="hidden sm:block" />
                business grow with Our Services
              </h2>
              <NavLink to="/contact">
                <button className="gradient-bg text-white px-5 sm:px-6 py-2 rounded-xl hover:bg-orange-700 transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer">
                  Contact Us <span className="text-lg">↗</span>
                </button>
              </NavLink>

            </div>
          </div>
        </div>
      </div>

      {/* ===== Main Footer Section ===== */}
      <div className="relative z-[1] max-w-full mx-auto w-full mb-6 px-6 sm:px-10 md:px-12 lg:px-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16 md:gap-20 border-gray-800">

        {/* Solutions */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Solutions</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {/* <li>AI Text to Voice</li>
            <li>AI Image Generator</li> */}
            <li>Graphic Designing</li>
            <li>Digital Marketing</li>
            <li>Virtual Assistant</li>
            {/* <li>AI Setu Software</li>
            <li>AI Chat Box</li> */}
            <li>Website Designing</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            {/* <li><NavLink to="/service"></NavLink>Services</li> */}
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li>      <NavLink to="/terms">
              Terms & Conditions
            </NavLink></li>
            <li>      <NavLink to="/refund">
              Refund Policy
            </NavLink></li>
            <li> <NavLink to="/privacy">Privacy Policy</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2"><FaPhoneAlt /> +91 9770435842</li>
            <li className="flex items-center gap-2"><MdEmail /> info.softwaresetu@gmail.com</li>
            <li className="flex items-center gap-2"><FaLocationDot /> Bengaluru, Karnataka</li>
          </ul>

          {/* ===== IMAGE ADDED BELOW CONTACT INFO ===== */}
          {/* <div className="mt-5">
            <img
              src={contactImg}
              alt="Contact"
              className="w-full max-w-[260px] rounded-xl shadow-lg"
            />
          </div> */}
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="relative z-[1] border-t border-gray-800 py-4 px-4 sm:px-8 md:px-12 lg:px-30 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm text-center gap-3">
        <p>© 2026 Cyber SandWich | All Rights Reserved.</p>

        <div className="flex space-x-3">
          <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full">
            <FaXTwitter />
          </a>
          <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full">
            <IoLogoInstagram />
          </a>
          <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
