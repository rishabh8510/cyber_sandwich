import React, { useState } from "react";
import CertificateImage from "../assets/certificate.jpg"; 
import { RxCross2 } from "react-icons/rx";

export default function CertifiteButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Button */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          openModal();
        }}
        className="
          fixed bottom-90 -left-19
          bg-[#FB3800]! text-white! px-10 py-2 rounded-full 
          hover:scale-110 transition-all duration-300
          z-50
          rotate-270
          text-lg
          cursor-pointer
        "
      >
        ISO Certificate
      </a>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-sm  bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-10 rounded-lg relative max-w-lg w-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black font-bold text-xl"
            >
              <RxCross2 size={24} className="bg-gray-200 p-1 rounded-2xl hover:bg-gray-400"/>
            </button>

            {/* Image */}
            <img
              src={CertificateImage}
              alt="ISO Certificate"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )}
    </>
  );
}
