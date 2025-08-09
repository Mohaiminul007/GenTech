/* eslint-disable react/no-unescaped-entities */
import React from "react";
import starBG from "@/public/assets/stars.png";
import Button from "./ui/Button";
const Hero = () => {
  return (
    <div
      className="h-[392px] mb-5 md:h-[700px] flex items-center relative overflow-hidden bg-black  [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] "
      style={{
        backgroundImage: `url(${starBG.src})`,
        backgroundRepeat: `repeat`,
      }}
    >
      <div className="absolute bg-black inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_10%,rgb(14,0,36,.5)_90%,transparent)] "></div>
      <div className="container  mx-auto relative mt-16">
        <h1 className="text-3xl max-w-sm md:text-4xl lg:text-6xl mx-auto md:max-w-2xl mb-3 md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          Grow Your Business With Cutting-Edge Software Solutions
        </h1>
        <p className="text-center text-sm text-gray-300 mx-auto max-w-sm md:max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          .
        </p>
        <div className="flex justify-center mt-5">
          <Button>Connect Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
