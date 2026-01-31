import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import HeaderLinks from "./HeaderLinks.jsx";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 herobg">
      {/* ================= MAIN NAVBAR ================= */}

      <div className="hidden md:block w-full herobg text-gray-700 text-sm">
        <div className="max-w-full mx-auto px-30 py-2 flex items-center justify-end flex-wrap gap-6">

          {/* Phone */}
          <div className="flex items-center gap-2 text-[14px]">
            {/* <span className="font-semibold flex items-center gap-2">
              <FaPhoneAlt className="mt-[1px]" /> 123456789
            </span> */}
          </div>

          <div className="flex items-center gap-2 text-[14px]">
            <span className="font-semibold flex items-center gap-2">
              <FaEnvelope className="mt-[1px]" /> support@cybersandwich.com
            </span>
          </div>

        </div>
      </div>


      <nav className="flex items-center justify-between py-3 px-5 sm:px-10 md:px-16 lg:px-24">

        {/* LEFT: Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer"
        >
          <img
            src="/logo.svg"
            alt="Cyber Sandwich Logo"
            className="h-15 w-auto object-contain"
            draggable="false"
          />
        </div>

        {/* CENTER: Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center space-x-8 text-gray-700 text-base font-medium">
            <HeaderLinks />
          </div>
        </div>

        {/* RIGHT: Contact Button (Desktop) */}
        <div className="hidden md:flex">
          <button
            onClick={() => navigate("/contact")}
            className="!flex items-center gap-2 gradient-bg  px-5 py-2 rounded-full"
          >
            <FaPhoneAlt className="text-sm" />
            Contact Us
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE DROPDOWN ================= */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col items-start px-6 py-4 space-y-5 text-gray-700 text-base">

            {/* Mobile Links */}
            <HeaderLinks onClick={closeMenu} />

            {/* Mobile Contact Button */}
            <button
              onClick={() => {
                closeMenu();
                navigate("/contact");
              }}
              className="flex items-center gap-2 w-full justify-center bg-black text-white px-5 py-3 rounded-full hover:bg-gray-900 transition"
            >
              <FaPhoneAlt className="text-sm" />
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
