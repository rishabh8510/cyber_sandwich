import leftCurve from "../assets/small.svg";
import testimonialsData from "../data/testimonialsData";

export default function Testimonials() {
  return (
    <section className="relative w-full py-20 px-4 md:px-10 lg:px-40 flex justify-center overflow-hidden">
      <div
        className="
          relative w-full max-w-full rounded-3xl p-6 md:p-10 
          hero-gradient
          overflow-hidden
        "
      >
        <img
          src={leftCurve}
          alt="curve"
          className="absolute left-0 -bottom-2 pointer-events-none select-none"
        />

        <div className="w-full flex justify-center mb-4">
          <span className="text-[18px] px-4 py-1 bg-white shadow-sm rounded-full border-start text-[#0072ff]">
            Testimonials
          </span>
        </div>

        <h2 className="text-center text-2xl md:text-4xl font-semibold mb-10 md:mb-12 px-4">
          What our <span className="color">Happy Customers</span> are saying
        </h2>

        {/* Cards Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            lg:grid-cols-3 
            gap-6 md:gap-8 
            justify-items-center 
            px-2 sm:px-6 md:px-10 lg:px-20
          "
        >
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="
                w-full sm:w-[95%] md:w-[90%]
                p-6 
                border-start
                rounded-xl 
                bg-white/60 
                backdrop-blur-sm 
                shadow-sm
              "
            >
              <p className="color text-3xl mb-4">❝</p>
              <p className="mb-6">{item.text}</p>
              <h4 className="font-bold color md:text-xl">{item.name}</h4>
              <p className="text-sm">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
