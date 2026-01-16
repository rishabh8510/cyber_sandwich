import icon from "../assets/icon.jpg";
import digital from "../assets/digital.jpg";

const page2Data = {
  sectionOne: {
    title: "Our Digital Marketing",
    highlight: "Services",
    description: "Ready to take your digital marketing to the next level? Contact Cyber Sandwich today to learn more about our digital marketing services and how we can help you grow your business online.",
    services: [
      { icon: icon, name: "Search Engine Optimization" },
      { icon: icon, name: "Social Media Marketing" },
      // { icon: icon, name: "Email Marketing" },
      { icon: icon, name: "Content Marketing" },
    ]
  },

  sectionTwo: {
    title: "Cultivate",
    highlight: "Success",
    image: digital,
    points: [
      { heading: "Expertise", text: "Our team of digital marketing experts brings years of experience and expertise to the table, ensuring that your campaigns are in good hands." },
      { heading: "Customization", text: "  We understand that every business is unique, which is why we offer customized solutions tailored to your specific goals and objectives." },
      { heading: "Transparency", text: "We believe in transparency and open communication every step of the way, providing you with regular updates and insights into your campaign performance." }
    ]
  }
};

export default page2Data;
