import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import dataHome from "../../data/dataHome";

const Home: React.FC = () => {
  const { heroSection, featuresSection, footer } = dataHome;

  return (
    <div>
      <HeroSection {...heroSection} />
      <FeaturesSection coreFeatures={featuresSection.coreFeatures} />
      <Footer {...footer} />
    </div>
  );
};

export default Home;