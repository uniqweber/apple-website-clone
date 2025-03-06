import { useEffect } from "react";
import Footer from "../../components/shared/Footer";
import AppleChip from "./homeComp/AppleChip";
import Features from "./homeComp/Features";
import Hero from "./homeComp/Hero";
import Highlights from "./homeComp/Highlights";
import Model from "./homeComp/Model";
import Lenis from "lenis";

const Home = () => {
   useEffect(() => {
     const lenis = new Lenis();
     function update(time) {
       lenis.raf(time);
       requestAnimationFrame(update);
     }
     requestAnimationFrame(update);
     return () => cancelAnimationFrame(update);
   }, []);
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
