import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Payment from "./pages/Payment";
import Services from "./pages/Services";
import SetuSoftware from "./pages/services/AlgoSoftware";
import WebsiteDesign from "./pages/services/WebsiteDesign";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import GraphicDesign from "./pages/services/GraphicDesign";
import AiChat from "./pages/services/AiChat";
import AiText from "./pages/services/AiText";
import AiImage from "./pages/services/AiImage";
import Virtual from "./pages/services/Virtual";
import WhatsAppButton from "./components/WhatsAppButton";
// import CertifiteButton from "./components/CertifiteButton";
import EcommercePackage from "./pages/EcommercePackage";
import SoftwarePackage from "./pages/SoftwarePackage";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProtectedSetuRoute from "./components/ProtectedSetuRoute";
import PaymentDrive from "./components/PaymentDrive";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/admin" replace />;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Header />
              <main className="min-h-screen pt-24 lg:pt-10">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/service" element={<Services />} />
                  {/* <Route path="/service/Setu-software" element={<SetuSoftware />} /> */}
                  {/* <Route
                    path="/service/Setu-software"
                    element={
                      <ProtectedSetuRoute>
                        <SetuSoftware />
                      </ProtectedSetuRoute>
                    }
                  /> */}

                                    <Route
                    path="/service/Setu-software"
                    element={
                        <SetuSoftware />
                    }
                  />
                  
                  <Route path="/service/website-designing" element={<WebsiteDesign />} />
                  <Route path="/service/digital-marketing" element={<DigitalMarketing />} />
                  <Route path="/service/graphic-designing" element={<GraphicDesign />} />
                  <Route path="/service/ai-chat-box" element={<AiChat />} />
                  <Route path="/service/ai-text-voice" element={<AiText />} />
                  <Route path="/service/ai-image-generator" element={<AiImage />} />
                  <Route path="/service/virtual-assistant" element={<Virtual />} />
                  <Route path="/ecommerce" element={<EcommercePackage />} />
                  <Route path="/software" element={<SoftwarePackage />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/refund" element={<RefundPolicy />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/paymentdrive" element={<PaymentDrive />} />
                </Routes>
              </main>

              <Footer />
              {/* <CertifiteButton /> */}
              <WhatsAppButton />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
