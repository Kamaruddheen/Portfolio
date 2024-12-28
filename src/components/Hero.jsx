import React from "react";
import HeroContent from "./HeroContent";
import ScrollButton from "./ScrollButton";

const Hero = () => {
  return (
    <section id="hero" className="w-full h-screen overflow-hidden bg-primary">
      <HeroContent />
    </section>
  );
};

export default Hero;
