import img from "../assets/contact.jpg";

export default function ContactSection() {
  return (
    <section className="grid grid-cols-1 max-w-full mx-auto py-20 px-8 lg:px-50">

      <span className="text-sm text-[#0072ff] border-start font-semibold tracking-widest rounded-2xl p-2 w-30 lg:px-4 ">
        Contact Us
      </span>

      <h2 className="text-4xl text-gray-800 mt-5">
        <span className="color font-semibold">Contact</span> our office for questions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

        {/* ================= LEFT FORM (SCROLLABLE + SAME HEIGHT) ================= */}
        <div
          className="
            p-4 border border-gray-300 rounded-2xl bg-white 
            h-[500px] 
            overflow-y-scroll 
            scrollbar-hide
          "
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf1aABI5G-3uTQ6gt0OAGl1VFoQznZUu2x6JeAztUFluXqShw/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="rounded-xl"
          >
            Loading…
          </iframe>
        </div>

        {/* ================= RIGHT IMAGE (SAME HEIGHT) ================= */}
        <div className="h-[500px]">
          <img
            src={img}
            alt="Team"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}
