import React from "react";
import Setu from "../assets/algo.png";

// React Icons
import {
  MdSpeed,
  MdVerified,
  MdBarChart,
} from "react-icons/md";
import { FaBolt, FaChartLine, FaUsers } from "react-icons/fa";
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineSearch, AiOutlineWarning } from "react-icons/ai";
import { BiLayer, BiShuffle } from "react-icons/bi";

export default function AdvantagesSection() {
  const Seturithmic = [
    { icon: <MdSpeed size={26} />, text: "Emotion Less / Disciplined" },
    { icon: <FaBolt size={26} />, text: "Speed (Multiple Trade)" },
    { icon: <BiLayer size={26} />, text: "Scalable" },
    { icon: <MdVerified size={26} />, text: "Less Chances Of Errors" },
    { icon: <MdBarChart size={26} />, text: "Back Tested Strategies" },
    { icon: <AiOutlineArrowDown size={26} />, text: "Low Impact Cost" },
  ];

  const manual = [
    { icon: <FaChartLine size={26} />, text: "Limited Trade At A Time" },
    { icon: <AiOutlineSearch size={26} />, text: "Limited Stocks Scan" },
    { icon: <AiOutlineWarning size={26} />, text: "More Chances Of Errors" },
    { icon: <BiShuffle size={26} />, text: "Random Trading" },
    { icon: <FaUsers size={26} />, text: "More Man Power Required" },
    { icon: <AiOutlineArrowUp size={26} />, text: "High Impact Cost" },
  ];

  return (
    <div className="w-full bg-white py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Advantages of Setu trading
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT CARD */}
        <div className="w-full md:w-1/3 bg-gray-100 p-10 rounded-3xl">
          <h3 className="text-3xl font-semibold mb-2">Seturithmic Trading</h3>
          <p className="text-gray-500 mb-6">Best Setu Trading Software</p>
          <hr className="border-gray-300 mb-6" />

          <ul className="space-y-5">
            {Seturithmic.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-orange-600">{item.icon}</span>
                <span className="text-lg">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CENTER IMAGE */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img src={Setu} alt="character" className="w-64 md:w-96" />
        </div>

        {/* RIGHT CARD */}
        <div className="w-full md:w-1/3 bg-gray-100 p-10 rounded-3xl">
          <h3 className="text-3xl font-semibold mb-2">Manual Trading</h3>
          <p className="text-gray-500 mb-6">Best Setu Trading Software.</p>
          <hr className="border-gray-300 mb-6" />

          <ul className="space-y-5">
            {manual.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-orange-600">{item.icon}</span>
                <span className="text-lg">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
