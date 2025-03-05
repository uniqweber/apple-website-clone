import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {heroVideo, smallHeroVideo} from "../../../utils";
import {useEffect, useState} from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 768 ? smallHeroVideo : heroVideo);
  const handleVideoSrc = () => {
    if (window.innerWidth < 768) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);
    return () => window.removeEventListener("resize", handleVideoSrc);
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {opacity: 1, delay: 2});
    gsap.to("#cta", {opacity: 1, translateY: -50, delay: 2});
  });

  return (
    <section className="relative bg-black w-full nav-height overflow-hidden">
      <div className="flex-col flex-center w-full h-5/6">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="w-9/12 md:w-10/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p>From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
