import React from "react";
import leftCurve from "../assets/small.svg";
import topCurve from "../assets/top.svg";
import leftImage from "../assets/left_image.jpg";

export default function Qr() {
  return (
    <section className="relative w-full py-20 px-4 md:px-10 lg:px-40 flex justify-center overflow-hidden ">
      <div className="relative w-full max-w-full rounded-3xl p-6 md:p-10 gradient overflow-hidden ">
        
        {/* BACKGROUND DECORATIVE ELEMENTS */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-orange-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* TOP–RIGHT CURVE */}
        <img
          src={topCurve}
          alt="curve"
          className="absolute top-0 right-0 pointer-events-none select-none filter drop-shadow-lg"
        />

        {/* BOTTOM–LEFT CURVE */}
        <img
          src={leftCurve}
          alt="curve"
          className="absolute left-0 -bottom-2 pointer-events-none select-none filter drop-shadow-lg"
        />

        {/* CENTERED IMAGE */}
        <div className="relative w-full flex justify-center items-center px-2 sm:px-6 md:px-10 mb-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-transparent to-blue-500/20 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-xl border border-gray-100">
              <img
                src={leftImage}
                alt="left-graphic"
                className="w-48 sm:w-60 md:w-72 lg:w-80 object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>


        <div className="relative w-full flex justify-center mt-8 mb-4">
          <div className="relative group">
            <div className="absolute -inset-1  rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
            <a
              href="https://u.payu.in/lJ57UbibETXF"
              className="
                relative inline-block
                w-[135px]
                text-center font-extrabold text-white text-[15px]
                py-[11px]
                rounded-[10px]
                gradient-bg
              "
            >
              Pay Now
              <span className="absolute right-3 top-1/2 -translate-y-1/2  transition-all duration-300">
                →
              </span>
            </a>
          </div>
        </div>

        {/* TEXT */}
        <div className="relative">
          <p className="flex items-center justify-center py-2 text-sm sm:text-base md:text-lg font-medium text-gray-700 tracking-wide">
            <span className="mr-3 text-gray-400">━━━━━</span>
            <span className="color bg-clip-text text-transparent font-semibold">
              Online Payment Gateway
            </span>
            <span className="ml-3 text-gray-400">━━━━━</span>
          </p>

          <p className="text-center text-xs text-gray-500 mt-1 font-light tracking-wide">
            Secure • Fast • Reliable
          </p>
        </div>
      </div>
    </section>
  );
}
