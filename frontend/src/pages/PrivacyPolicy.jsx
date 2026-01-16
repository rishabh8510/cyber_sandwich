import React, { useState, useEffect } from 'react';
import privacyPolicyData from '../data/privacyPolicyData.json';

const PrivacyPolicy = () => {
  const [data, setData] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    setData(privacyPolicyData);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading privacy policy...</p>
        </div>
      </div>
    );
  }

  const { privacyPolicy } = data;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-full mx-auto lg:py-28 px-4 sm:px-6 lg:px-40">
        
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar Navigation - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-1 mb-8 lg:mb-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Navigation
              </h3>
              <nav className="space-y-2">
                {privacyPolicy.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === 'contact'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Contact Us
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content - Full width on mobile, 3/4 on desktop */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 md:mb-8 text-center">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                {privacyPolicy.title}
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 md:mb-8">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed break-words overflow-hidden">
                {privacyPolicy.introduction.content}
              </p>
            </div>

            {/* Main Sections */}
            <div className="space-y-6 md:space-y-8">
              {privacyPolicy.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="bg-white rounded-2xl shadow-lg p-6 md:p-8 scroll-mt-6 md:scroll-mt-8 overflow-hidden"
                >
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="break-words">{section.title}</span>
                  </h2>

                  {/* Main Content */}
                  {section.content && (
                    <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-base break-words overflow-hidden">
                      {section.content}
                    </p>
                  )}

                  {/* Points List */}
                  {section.points && (
                    <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 overflow-hidden">
                      {section.points.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-1 mr-2 md:mr-3 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700 text-sm md:text-base break-words">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="space-y-4 md:space-y-6 overflow-hidden">
                      {section.subsections.map((subsection, index) => (
                        <div key={index} className="pl-4 md:pl-6 border-l-2 border-blue-200 overflow-hidden">
                          <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4 break-words">
                            {subsection.title}
                          </h3>
                          
                          {subsection.content && (
                            <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-sm md:text-base break-words overflow-hidden">
                              {subsection.content}
                            </p>
                          )}

                          {subsection.points && (
                            <ul className="space-y-1 md:space-y-2 mb-3 md:mb-4 overflow-hidden">
                              {subsection.points.map((point, pointIndex) => (
                                <li key={pointIndex} className="flex items-start">
                                  <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                                  <span className="text-gray-700 text-sm md:text-base break-words">{point}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {subsection.note && (
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 md:p-4 rounded-r-lg overflow-hidden">
                              <p className="text-yellow-700 text-xs md:text-sm break-words">
                                {subsection.note}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Note */}
                  {section.note && (
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-3 md:p-4 rounded-r-lg mt-3 md:mt-4 overflow-hidden">
                      <p className="text-blue-700 text-sm md:text-base break-words">
                        <strong>Note:</strong> {section.note}
                      </p>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Contact Section */}
            <section
              id="contact"
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mt-6 md:mt-8 scroll-mt-6 md:scroll-mt-8 overflow-hidden"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                <span className="break-words">{privacyPolicy.contact.title}</span>
              </h2>

              <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-base break-words overflow-hidden">
                {privacyPolicy.contact.content}
              </p>

              <div className="bg-gray-50 rounded-xl p-4 md:p-6 overflow-hidden">
                <div className="space-y-3 md:space-y-4">
                  <div className="overflow-hidden">
                    <h3 className="font-semibold text-gray-900 text-base md:text-lg break-words">
                      {privacyPolicy.contact.details.businessName}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base break-words">{privacyPolicy.contact.details.company}</p>
                  </div>

                  <div className="overflow-hidden">
                    <h4 className="font-medium text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Address:</h4>
                    {privacyPolicy.contact.details.address.map((line, index) => (
                      <p key={index} className="text-gray-600 text-sm md:text-base break-words">
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 md:gap-4 overflow-hidden">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Email:</h4>
                      <a
                        href={`mailto:${privacyPolicy.contact.details.email}`}
                        className="text-blue-600 hover:text-blue-800 transition-colors text-sm md:text-base break-words inline-block max-w-full overflow-hidden text-ellipsis"
                      >
                        {privacyPolicy.contact.details.email}
                      </a>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Phone:</h4>
                      <a
                        href={`tel:${privacyPolicy.contact.details.phone}`}
                        className="text-blue-600 hover:text-blue-800 transition-colors text-sm md:text-base break-words"
                      >
                        {privacyPolicy.contact.details.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="text-center mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-300 overflow-hidden">
              <p className="text-gray-600 text-sm md:text-base break-words">
                This privacy policy is subject to change without notice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;