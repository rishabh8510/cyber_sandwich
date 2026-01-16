import icon from "../assets/icon.jpg";
import graphic1 from "../assets/graphic1.jpg";

const page2Data = {
  sectionOne: {
    title: "Graphic Designing",
    highlight: "Services",
    description: "Ready to take your digital marketing to the next level? Contact Cyber Sandwich today to learn more about our digital marketing services and how we can help you grow your business online.",
    services: [
      { icon: icon, name: "Logo Designing" },
      { icon: icon, name: "Flyers & Posters" },
      { icon: icon, name: "Business Cards" },
      { icon: icon, name: "Brochure Designing" },
      { icon: icon, name: "Ad Creatives" },
      { icon: icon, name: "Email Design" },
    ]
  },

  sectionTwo: {
    title: "Creativity at",
    highlight: "your fingertips",
    image: graphic1,
    points: [
      { heading: "Creative Excellence", text: " Our team of talented designers combines artistic flair with technical expertise to deliver designs that are both visually stunning and strategically effective." },
      { heading: "Customization", text: "We understand that one size does not fit all. That’s why we offer customized graphic design solutions tailored to your unique brand and goals." },
      { heading: "Timely Delivery", text: "We understand the importance of deadlines. Our efficient workflow and project management ensure that your designs are delivered on time, every time." }
    ]
  }
};

export default page2Data;
