import { ChevronDown } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

// React icons
import { FiMonitor, FiTrendingUp, FiImage, FiBarChart2, FiMessageSquare, FiVolume2, FiCpu } from "react-icons/fi";
import { AiOutlineRobot } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";

export default function HeaderLinks({ onClick }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);

  const linkClass = ({ isActive }) =>
    isActive
      ? "color font-medium border-b-2 border-[#0C8BEC] pb-1"
      : "text-gray-700 hover:text-[#0C8BEC]";


  // ================= OUTSIDE CLICK TO CLOSE =================
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <NavLink to="/" onClick={onClick} className={linkClass}>
        Home
      </NavLink>

      <NavLink to="/about" onClick={onClick} className={linkClass}>
        About Us
      </NavLink>

      {/* ======================= SERVICES ======================= */}
      <div className="relative inline-flex items-center gap-1" ref={servicesRef}>
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="flex items-center gap-1 default-text"
        >
          <span className="cursor-pointer">Services</span>
        </button>

        {servicesOpen && (
          <div
            className="
              absolute left-1/2 -translate-x-1/2 top-full mt-4
              bg-white shadow-xl rounded-2xl p-6 w-[620px]
              grid grid-cols-2 gap-6 z-50
            "
          >
            <div className="space-y-4">
              <NavLink
                to="/service/website-designing"
                onClick={() => setServicesOpen(false)}
                className="flex gap-3 items-center hover:bg-gray-100 p-3 rounded-xl"
              >
                <div className="w-10 h-10 rounded-full grid place-content-center">
                  <FaLaptopCode size={20} className="text-[#0072ff]" />
                </div>
                <p className="text-gray-800 font-medium">Website Designing</p>
              </NavLink>

              <NavLink
                to="/service/digital-marketing"
                onClick={() => setServicesOpen(false)}
                className="flex gap-3 items-center hover:bg-gray-100 p-3 rounded-xl"
              >
                <div className="w-10 h-10 rounded-full grid place-content-center">
                  <FiTrendingUp size={20} className="text-[#0072ff]" />
                </div>
                <p className="text-gray-800 font-medium">Digital Marketing</p>
              </NavLink>
              {/* <NavLink
                to="/service/Setu-software"
                onClick={() => setServicesOpen(false)}
                className="flex gap-3 items-center hover:bg-gray-100 p-3 rounded-xl"
              >
                <div className="w-10 h-10 rounded-full grid place-content-center">
                  <FiBarChart2 size={20} className="text-[#0072ff]" />
                </div>
                <p className="text-gray-800 font-medium">Setu Software</p>
              </NavLink> */}
            </div>

            <div className="space-y-4">
              <NavLink
                to="/service/graphic-designing"
                onClick={() => setServicesOpen(false)}
                className="flex gap-3 items-center hover:bg-gray-100 p-3 rounded-xl"
              >
                <div className="w-10 h-10 rounded-full grid place-content-center">
                  <FiImage size={20} className="text-[#0072ff]" />
                </div>
                <p className="text-gray-800 font-medium">Graphic Designing</p>
              </NavLink>

              <NavLink
                to="/service/virtual-assistant"
                onClick={() => setServicesOpen(false)}
                className="flex gap-3 items-center hover:bg-gray-100 p-3 rounded-xl"
              >
                <div className="w-10 h-10 rounded-full grid place-content-center">
                  <AiOutlineRobot size={20} className="text-[#0072ff]" />
                </div>
                <p className="text-gray-800 font-medium">Virtual Assistant</p>
              </NavLink>
            </div>
          </div>
        )}
      </div>
      <NavLink to="/ecommerce" onClick={onClick} className={linkClass}>
        Winery E - Commerce Services
      </NavLink>

      <NavLink to="/software" onClick={onClick} className={linkClass}>
        Winery Website Design
      </NavLink>

      {/* <NavLink to="/payment" onClick={onClick} className={linkClass}>
        Payment
      </NavLink> */}

      <NavLink to="/contact" onClick={onClick} className={linkClass}>
        Contact Us
      </NavLink>
    </>
  );
}
