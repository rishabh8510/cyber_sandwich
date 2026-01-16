import React, { useState } from "react";

export default function CodePopup({ onVerify }) {
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    if (code === "5123") {
      onVerify(true);
    } else {
      alert("Invalid Code!");
      onVerify(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999]">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80 text-center">
        <h2 className="text-lg font-semibold mb-3">Enter Access Code</h2>

        <input
          type="password"
          className="border border-gray-300 w-full p-2 rounded-full mb-4 text-center focus:outline-none"
          placeholder="Enter code..."
          onChange={(e) => setCode(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-orange-600 text-white px-4 py-2 rounded w-full"
        >
          Verify
        </button>
      </div>
    </div>
  );
}
