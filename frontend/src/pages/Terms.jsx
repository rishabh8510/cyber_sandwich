import React, { useState, useEffect } from 'react';
import termsData from '../data/termsData.json';

const Terms = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(termsData);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 lg:py-28 px-4 sm:px-6 lg:px-40">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
        </div>

        {/* Terms & Conditions Section */}
        <Section 
          title={data.termsAndConditions.title}
          sections={data.termsAndConditions.sections}
        />

        {/* Proprietor Information Card */}
        {/* <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-l-4 border-blue-600">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Proprietor Information</h2>
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold text-gray-800 mb-2">Proprietor Name</span>
                <span className="text-gray-700 text-xl">Manish Shukla</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold text-gray-800 mb-2">Email</span>
                <a href="mailto:info.cybersandwich@gmail.com" className="text-blue-600 hover:text-blue-800 text-lg">
                  info.cybersandwich@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold text-gray-800 mb-2">Phone</span>
                <a href="tel:+918989853069" className="text-gray-700 text-lg hover:text-blue-600">
                  +91 89898 53069
                </a>
              </div>
            </div>
          </div>
        </div> */}


        <Section 
          title={data.reportAbusePolicy.title}
          sections={data.reportAbusePolicy.sections}
        />

        {/* Acceptable Usage Policy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {data.acceptableUsagePolicy.title}
          </h2>
          
          {/* Main sections */}
          <div className="space-y-4 mb-8">
            {data.acceptableUsagePolicy.sections.map((section) => (
              <p key={section.id} className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            ))}
          </div>

          {/* Acceptable Use Points */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {data.acceptableUsagePolicy.acceptableUse.title}
            </h3>
            <ul className="space-y-3">
              {data.acceptableUsagePolicy.acceptableUse.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Refund Policy */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {data.refundPolicy.title}
          </h2>
          
          {/* Main content */}
          {data.refundPolicy.sections.map((section) => (
            <p key={section.id} className="text-gray-700 mb-6 leading-relaxed">
              {section.content}
            </p>
          ))}

          {/* Refund Timeframes */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Refund Timeframes
            </h3>
            <div className="space-y-4">
              {data.refundPolicy.refundTimeframes.map((item, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-semibold text-gray-800">{item.service}</h4>
                  <p className="text-gray-700">{item.timeframe}</p>
                  {item.note && (
                    <p className="text-sm text-gray-600 mt-1">{item.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Additional Notes */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            {data.refundPolicy.additionalNotes.map((note, index) => (
              <p key={index} className="text-gray-700 mb-2 last:mb-0">
                {note}
              </p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            For any questions regarding these terms, please contact us at{' '}
            <a href="mailto:info.cybersandwich@gmail.com" className="text-blue-600 hover:text-blue-800">
              info.cybersandwich@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, sections }) => (
  <div className="bg-white rounded-lg shadow-md p-8 mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
    <div className="space-y-4">
      {sections.map((section) => (
        <div key={section.id}>
          {section.title && (
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {section.title}
            </h3>
          )}
          <p className="text-gray-700 leading-relaxed">
            {section.content}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Terms;
