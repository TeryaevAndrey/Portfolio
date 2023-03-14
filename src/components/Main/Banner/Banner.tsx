import Header from "@/components/Header/Header";
import Image from "next/image";
import React from "react";
import Avatar from "./Avatar";
import Content from "./Content";

const Banner = () => {
  return (
    <div
      className="bg-banner-gradient min-h-screen relative pb-6 md:pb-0"
      id="banner"
    >
      <Header />
      <div className="container-app">
        <div className="content-wrapper flex items-center">
          <div className="flex flex-col md:flex-row md:justify-between w-full h-full items-center md:pb-[100px]">
            <Content />
            <Avatar />
          </div>
        </div>
        <div className="mt-10 flex justify-center md:absolute md:bottom-[45px] md:left-[50%] md:translate-x-[-50%]">
          <Image
            className="animate-bounce"
            src="/img/mouse.svg"
            alt="mouse"
            width="32"
            height="73"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
