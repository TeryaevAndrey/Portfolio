import Header from "@/components/Header/Header";
import Image from "next/image";
import React from "react";
import Content from "./Content";

const Banner = () => {
  return (
    <div className="bg-banner-gradient min-h-screen relative pb-6">
      <Header />
      <div className="container-app">
        <div className="flex flex-col items-center">
          <Content />
          <div className="w-[270px] h-[270px] relative rounded-[40px] overflow-hidden mt-11">
            <Image
              className="object-contain"
              src="/img/avatar.jpg"
              alt="avatar"
              loading="lazy"
              fill={true}
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Image className="animate-bounce" src="/img/mouse.svg" alt="mouse" width="32" height="73" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
