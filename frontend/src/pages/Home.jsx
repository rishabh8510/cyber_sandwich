import SEO from "../components/SEO";
import HeroSection from "./home/HeroSection";
import AboutSection from "./home/AboutSection";
import UnlockingSolutions from "./home/UnlockingSolutions";
import ServicesSection from "./home/ServicesSection";
// import VideoSlider from "../components/VideoSlider";
// import BoldText from "../components/BoldText";
import WhyChooseUs from "./WhyChooseUs";
import StartProject from "./StartProject";

export default function Home() {
  return (
    <>
      <SEO
        title="Home | Cyber Sandwich"
        description="Welcome to MyCompany — we build amazing products."
        keywords="company, business, services"
      />
      <HeroSection />
      {/* <BoldText /> */}
      <AboutSection />
      <UnlockingSolutions />
      <ServicesSection />
      <WhyChooseUs />
      <StartProject />
      
      {/* <VideoSlider /> */}
    </>
  );
}
