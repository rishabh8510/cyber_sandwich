import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import HeaderLinks from "./HeaderLinks.jsx";
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-xs">

      {/* ================= TOP BAR ================= */}
      {/* <div className="hidden md:block w-full bg-[#f5f5f5] text-gray-700 text-sm">
        <div className="max-w-full mx-auto px-30 py-2 flex items-center justify-between flex-wrap gap-3">

          <div className="flex items-center gap-2 text-[14px]">
            <span className="font-semibold flex text-center justify-center gap-2">
              <FaPhoneAlt className="mt-1" /> +91 9770435842
            </span>
            <p>24×7 Support</p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#FB3800] text-white px-4 py-1.5 text-sm rounded-md hover:bg-orange-600 transition-all cursor-pointer"
            >
              Free trial
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#FB3800] text-white px-4 py-1.5 text-sm rounded-md hover:bg-orange-600 transition-all cursor-pointer"
            >
              Request demo
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#FB3800] text-white px-4 py-1.5 text-sm rounded-md hover:bg-orange-600 transition-all cursor-pointer"
            >
              Login
            </button>
          </div>

        </div>
      </div> */}

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="flex items-center justify-between py-3 px-5 sm:px-10 md:px-16 lg:px-30 bg-white">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer"
        >
          <img
            src="/logo.svg"
            alt="Cyber Sandwich Logo"
            className="h-13 w-auto object-contain"
            draggable="false"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 text-base font-medium">
          <HeaderLinks />
        </div>

        {/* Mobile Menu Button */}
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
          <div className="flex flex-col items-start px-6 py-4 space-y-4 text-gray-700 text-base">
            <HeaderLinks onClick={closeMenu} />
          </div>
        </div>
      )}
    </header>
  );
}
