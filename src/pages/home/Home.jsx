import Footer from "../../components/shared/Footer";
import AppleChip from "./homeComp/AppleChip";
import Features from "./homeComp/Features";
import Hero from "./homeComp/Hero";
import Highlights from "./homeComp/Highlights";
import Model from "./homeComp/Model";

const Home = () => {
  return (
    <main>
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <AppleChip />
      <Footer />
    </main>
  );
};

export default Home;
