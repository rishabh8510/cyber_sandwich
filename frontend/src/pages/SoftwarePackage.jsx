import React, { useState } from "react";
import data from "../data/softwareData.json";
import { NavLink } from "react-router-dom";
import QuotationModal from "../components/QuotationModal";

export default function SoftwarePackage() {
  const [open, setOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);

  const openModal = (pkg) => {
    setSelectedPkg(pkg);
    setOpen(true);
  };

  return (
    <>
      <div className="w-full py-28 md:py-28">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 px-4">
          Winery Website Design Packages
        </h1>

        <p className="text-center text-gray-500 mb-8 md:mb-12 px-5 text-sm sm:text-base">
          Choose the right plan based on your product catalogue size
        </p>

        <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-6 md:px-40">
          {data.map((pkg, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg p-6 sm:p-7 md:p-8 border-t-4 border-[#00c6ff] flex flex-col justify-between"
            >
              {/* Get Quotation Button */}
              {/* <button
                onClick={() => openModal(pkg)}
                className="absolute top-4 right-4 text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-[#00c6ff] text-[#00c6ff] hover:bg-[#00c6ff] hover:text-white transition"
              >
                Get Quote
              </button> */}

              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-1">
                  {pkg.title}
                </h2>
                <p className="text-gray-500 mb-3 text-sm sm:text-base">
                  {pkg.subtitle}
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  <span className="color">{pkg.price}</span>
                  <span className="text-sm sm:text-base text-gray-600">
                    {" "}
                    / one-time setup
                  </span>
                </h3>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700 text-sm sm:text-base"
                    >
                      <span className="color font-bold">✓</span> {feature}
                    </li>
                  ))}
                </ul>

                <p className="text-gray-500 text-xs sm:text-sm mb-5">
                  {pkg.tagline}
                </p>
              </div>

              {/* <NavLink to="/contact"> */}
                <button
                onClick={() => openModal(pkg)} 
                className="w-full mt-6 flex items-center justify-center gap-2 text-white font-medium py-2 rounded-lg transition-all hover:opacity-90 gradient-bg cursor-pointer">
                  Get Quote<span className="text-lg ml-2">↗</span>
                </button>
              {/* </NavLink> */}
            </div>
          ))}
        </div>
      </div>

      {/* Quotation Modal */}
      <QuotationModal
        open={open}
        onClose={() => setOpen(false)}
        selectedPkg={selectedPkg}
      />
    </>
  );
}
