import Header from "../Landing-Page/HeaderSection";
import AboutSection from "../Landing-Page/AboutSection";
import ServiceSection from "../Landing-Page/ServiceSection";
import ReviewSection from "../Landing-Page/ReviewSection";
import WhyUSSection from "../Landing-Page/WhyUSSection";
import NewsleterSection from "../Landing-Page/NewsleterSection";
import FAQSection from "../Landing-Page/FAQSection";
import Footer from "../Landing-Page/FooterSection";

function LandingPage() {
  return (
    <div className="main-section">
      <Header />
      <AboutSection />
      <WhyUSSection />
      <ServiceSection />
      <ReviewSection />
      <FAQSection />
      <NewsleterSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
