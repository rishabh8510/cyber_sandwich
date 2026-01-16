import React, { useState, useEffect } from 'react';
import refundPolicyData from '../data/refundPolicyData.json';

const RefundPolicy = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(refundPolicyData);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen  flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading refund policy...</p>
        </div>
      </div>
    );
  }

  const { refundPolicy } = data;

  return (
    <div className="min-h-screen  lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto lg:px-40">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {refundPolicy.title}
            </h1>
            <div className="w-24 h-1 gradient-bg mx-auto mb-6"></div>
            <h2 className="text-2xl font-semibold color">
              {refundPolicy.mainTitle}
            </h2>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 transform hover:scale-[1.01] transition-transform duration-300">
          {refundPolicy.sections.map((section) => (
            <p key={section.id} className="text-gray-700 text-lg leading-relaxed text-center">
              {section.content}
            </p>
          ))}
        </div>

        {/* Refund Timeframes */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Refund Timeframes
          </h3>
          <div className="text-center mb-8">
            <p>
              Once we verify the refund requst we will credit the refund to original payment methode within 6-7 days
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-1">
            {refundPolicy.refundTimeframes.map((item, index) => (
              <div
                key={index}
                className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg hover:bg-blue-100 transition-colors duration-300"
              >
                <div className="flex items-start mb-2">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {item.service}
                    </h4>
                    <p className="text-gray-700 mt-1">
                      {item.timeframe}
                    </p>
                    {item.note && (
                      <p className="text-sm text-gray-600 mt-2 bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                        <span className="font-semibold">Note:</span> {item.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {refundPolicy.cancellationPolicy.title}
          </h3>
          <ul className="space-y-4">
            {refundPolicy.cancellationPolicy.points.map((point, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Cancellation */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-2xl p-8 mb-8 transform hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {refundPolicy.projectCancellation.title}
          </h3>
          <div className="flex items-start">
            <div className="bg-yellow-100 p-3 rounded-lg mr-4">
              <svg
                className="w-6 h-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {refundPolicy.projectCancellation.content}
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 mb-8 text-center transform hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="text-lg mb-4">
            {refundPolicy.contactInfo.text}
          </p>
          <a
            href={`mailto:${refundPolicy.contactInfo.email}`}
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {refundPolicy.contactInfo.email}
          </a>
        </div>

        {/* Closing Note */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 inline-block">
            <p className="text-xl font-semibold text-gray-800">
              {refundPolicy.closingNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;