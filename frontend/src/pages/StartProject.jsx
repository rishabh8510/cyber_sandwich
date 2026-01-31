import { Phone, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Schedule a Consultation Call",
    desc: "Discuss your needs and goals, and learn how we can realize your ideas.",
    icon: Phone,
    color: "bg-[#85744c]",
  },
  {
    id: "02",
    title: "Explore Solutions and Team Setup",
    desc: "Examine solutions, clarify requirements, and onboard the ideal team for your needs.",
    icon: Lightbulb,
    color: "bg-[#85744c]",
  },
  {
    id: "03",
    title: "Kick Off and Monitor the Project",
    desc: "Our team springs into action, keeping you informed and adjusting when necessary.",
    icon: Rocket,
    color: "bg-[#85744c]",
  },
];

export default function StartProject() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold">
          <span className="color">Start Your Project</span>{" "}
          with Cyber Sandwich Today
        </h2>

        <p className="mt-5 max-w-3xl mx-auto text-gray-600">
          We’d love to connect with you and figure out how we can contribute to
          your success. Get started with an efficient, streamlined process:
        </p>

        {/* Button */}
        <div className="mt-8">
          <button className="flex items-center gap-3 mx-auto !rounded-full gradient-bg px-7 py-2 text-white font-medium hover:bg-red-600 transition">
            Schedule a Meeting
            <span className="text-xl ml-3">→</span>
          </button>
        </div>

        {/* Steps */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-14 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative text-left">
              {/* Big number */}
              <span className="absolute -top-14 left-0 text-[120px] font-bold text-gray-300 opacity-50 select-none">

                {step.id}
              </span>

              {/* Icon */}
              <div
                className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-white  ${step.color}`}
              >
                <step.icon size={20} />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900 ">
                {step.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {step.desc}
              </p>

              {/* Arrow */}
              {index !== steps.length - 1 && (
                <span className="hidden md:block absolute top-10 -right-8 color text-2xl">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
