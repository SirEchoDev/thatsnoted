import React from "react";
import HeroImage from "../components/HeroImage";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between h-screen">
      <div className="flex justify-center items-center ml-[56px]">
        <div className="w-[420px]">
          <h1 className="relative text-[4rem] font-bold text-gray-800 leading-tight indent-[70px] sm:text-[4rem] sm:indent-[60px]">
            <span className="relative">
              One Place
              <span className="absolute left-[-115px] top-[40px] w-[100px] h-[8px] bg-[#95b3ff]"></span>
            </span>
            <br />
            Endless{" "}
            <span className="text-[#95b3ff] font-light underline decoration-[#95b3ff]">
              Idea
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Organize your thoughts, create new ideas, and bring them to life
            effortlessly.
          </p>
        </div>
      </div>
      <HeroImage />
    </section>
  );
};

export default HeroSection;
