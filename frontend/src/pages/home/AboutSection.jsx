import React, { useEffect, useState, useRef } from "react";
import teamImage from "../../assets/team-meeting.jpg";

export default function AboutSection() {
  const statsData = [
    { number: 11, label: "Years of Experience" },
    { number: 20000, label: "Happy Customers" },
    { number: 520, label: "Team Members" },
    { number: 12500, label: "Projects Completed" },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has already run
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startCounting();
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const startCounting = () => {
    const duration = 3000; // total animation time
    const intervalTime = 30; // update every 30ms

    const intervals = statsData.map((stat, idx) => {
      const increment = stat.number / (duration / intervalTime);
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[idx] < stat.number) {
            newCounts[idx] = Math.min(newCounts[idx] + increment, stat.number);
          }
          return newCounts;
        });
      }, intervalTime);
    });

    setTimeout(() => intervals.forEach(clearInterval), duration + 50);
  };

  const formatNumber = (num) => {
    if (num >= 1000 && num < 1000000) return Math.round(num / 1000) + "k+";
    if (num >= 1000000) return Math.round(num / 1000000) + "M+";
    return Math.round(num) + (num % 1 !== 0 ? "+" : "");
  };

  return (
    <section ref={sectionRef} className="w-full bg-white text-gray-900">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-full mx-auto px-6 md:px-30 py-16 gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={teamImage}
            alt="Team working together"
            className="w-full h-full rounded-xl object-cover"
            draggable={false}
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl leading-snug mb-4">
            Why <span className="color font-semibold">Cyber Sandwich</span> is best for you?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-justify">
            Cyber Sandwich stands out as your ideal choice due to its advanced
            technology, tailored solutions, and commitment to driving your
            success. With our cutting-edge  capabilities and personalized
            approach, we deliver unmatched results that align perfectly with
            your business goals and objectives. Trust Cyber Sandwich to
            revolutionize your operations and propel your business to new
            heights.
          </p>
          {/* <button className="bg-[radial-gradient(ellipse_at_bottom,#FFFFFF_0%,#FB3800_40%)] text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-all flex items-center gap-2">
            Learn More
            <span className="text-lg">↗</span>
          </button> */}
        </div>
      </div>

      <div className="border-gray-200 my-10"></div>

      {/* <div className="max-w-full mx-auto px-6 md:px-30 text-center">
        <div className="mb-8">
          <p className="text-sm text-[#0072ff] font-semibold tracking-widest mb-6">
            <span className="border-start p-2 rounded-2xl">
              Who We Are
            </span>
          </p>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-3">
            Think further with our <span className="color">expert insights</span>
          </h3>
          <p className="text-gray-500">The proof is in the numbers</p>
        </div>
        <div className="bg-gray-100 py-5 px-6 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className={`py-8 px-4 flex flex-col items-center justify-center relative ${idx !== 3
                    ? "after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-10 after:w-px after:bg-gray-300"
                    : ""
                  }`}
              >
                <h4 className="text-3xl font-bold color mb-2">
                  {formatNumber(counts[idx])}
                </h4>
                <p className="text-gray-600 font-medium text-center">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}