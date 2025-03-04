import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {watchImg} from "../../../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {opacity: 1, y: 0});
    gsap.to(".link", {opacity: 1, y: 0, duration: 1, stagger: 0.25});
  }, []);
  return (
    <section id="highlights" className="bg-zinc w-screen h-full overflow-hidden common-padding">
      <div className="screen-max-width">
        <div className="md:flex justify-between items-end mb-12 w-full">
          <h1 id="title" className="section-heading">
            Get the highlights
          </h1>
          <div className="flex flex-wrap items-end gap-5 i">
            <p className="link">
              Watch the film <img className="ml-2" src={watchImg} alt="" />
            </p>
            <p className="link">
              Watch the event <img className="ml-2" src={watchImg} alt="" />
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  );
};

export default Highlights;
