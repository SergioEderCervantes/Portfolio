import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative pt-16">
      <div className="max-w-4xl">
        <h1
          className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold text-white leading-tight tracking-tighter"
          data-aos="fade-up"
        >
          I'm a FULL-STACK DEVELOPMENT TEAM & SOFTWARE ENGINEERS
        </h1>
        <a
          href="#featured-projects"
          className="mt-8 inline-flex items-center gap-2 bg-strong-purple text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300 animate-[glow-pulse_3s_infinite_ease-in-out]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Ver Proyectos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>{" "}
      </div>{" "}
    </section>
  );
};

export default HeroSection;
