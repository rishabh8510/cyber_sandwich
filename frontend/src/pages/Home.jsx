import SEO from "../components/SEO";
import HeroSection from "./home/HeroSection";
import AboutSection from "./home/AboutSection";
import UnlockingSolutions from "./home/UnlockingSolutions";
import ServicesSection from "./home/ServicesSection";
import VideoSlider from "../components/VideoSlider";

export default function Home() {
  return (
    <>
      <SEO
        title="Home | Software Setu"
        description="Welcome to MyCompany — we build amazing products."
        keywords="company, business, services"
      />
      <HeroSection />
      <AboutSection />
      <UnlockingSolutions />
      <ServicesSection />
      {/* <VideoSlider /> */}
    </>
  );
}
