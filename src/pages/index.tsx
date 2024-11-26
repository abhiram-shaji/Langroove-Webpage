import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ScreenshotsSection from "../components/ScreenshotsSection";
import Footer from "../components/Footer";
import dataHome from "../../data/dataHome";

const Home: React.FC = () => {
  const { heroSection, featuresSection, testimonialsSection, screenshotsSection, footer } = dataHome;

  return (
    <div>
      <HeroSection {...heroSection} />
      <FeaturesSection coreFeatures={featuresSection.coreFeatures} />
      <TestimonialsSection testimonials={testimonialsSection.testimonials} />
      <ScreenshotsSection {...screenshotsSection} />
      <Footer {...footer} />
    </div>
  );
};

export default Home;