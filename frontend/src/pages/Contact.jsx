import img from "../assets/contact.jpg";
import general from "../assets/general.svg";
import customer from "../assets/customer.svg";

import ContactSection from "../components/ContactSection";

export default function Contact() {
  return (
    <div className="w-full">

      {/* ===================== HERO SECTION ====================== */}
      <section className="w-full bg-hero-gradient lg:pt-28 pb-20 rounded-b-[30px]">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h1 className="text-6xl font-semibold color ">
            We’re Here to
          </h1>
          <h2 className="text-6xl text-gray-800 mt-1">
            Help You Grow
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Don’t hesitate to get in touch with your preferred contact method.
            We’re excited to connect with you and discuss how our friendly team
            can help you succeed.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-start bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={general} className="w-6 h-6" alt="" />
                <h3 className="color font-semibold text-lg">General Inquiries:</h3>
              </div>
              <p className="text-gray-700 mt-2 text-left">Address: Calefornia, USA</p>
              <p className="text-gray-700 mt-5 text-left">Website: www.cybersandwich.com</p>
            </div>

            <div className="border-start bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={customer} className="w-6 h-6" alt="" />
                <h3 className="color font-semibold text-lg">Customer Service:</h3>
              </div>
              <p className="text-gray-700 mt-2 text-left">24/7 Contact number: 123456789</p>
              <p className="text-gray-700 mt-1 text-left">Email: info@cybersandwich.com</p>
              <p className="text-gray-700 mt-5 text-left">Website: www.cybersandwich.com</p>
            </div>
          </div>

        </div>
      </section>

      <ContactSection />

    </div>
  );
}
