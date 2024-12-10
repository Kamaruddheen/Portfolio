import React from "react";
import StarCanvas from "./StarCanvas";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-primary">
      <StarCanvas />
      <HeroContent />
    </section>
  );
};

export default Hero;
