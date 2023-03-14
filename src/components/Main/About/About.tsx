import LinkScroll from "@/components/LinkScroll";
import Title from "@/components/Title";
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="bg-about-gradient py-6 more-md:py-20" id="about">
      <div className="container-app">
        <Title title="Обо мне" />
        <div className="flex flex-col md:flex-row items-center md:justify-between mt-6 md:mt-12">
          <div className="relative w-[270px] h-[270px] more-md:w-[400px] more-md:h-[400px] overflow-hidden rounded-tl-[80px] rounded-tr-[100px] rounded-bl-[150px] rounded-br-[80px]">
            <Image
              className="object-contain"
              src="/img/robot.jpg"
              alt="about-me"
              fill={true}
            />
          </div>
          <div className="flex flex-col text-center md:text-start mt-8 lg:mt-0 max-w-auto md:max-w-[450px] lg:max-w-[500px] w-full">
            <p className="leading-[26px]">
              Привет! Меня зовут Андрей, я являюсь Frontend разработчиком с 3
              летним опытом работы. Моя страсть к технологиям и желание
              создавать красивые, интуитивно понятные пользовательские
              интерфейсы, вдохновляют совершенствовать свои навыки и радовать
              покупателей.
            </p>
            <div className="flex justify-center md:justify-start items-center gap-8 mt-5 more-md:mt-6">
              <LinkScroll to="skills" title="Список навыков" minH={60} />
              <Link
                className="hidden md:block ease-linear duration-150 text-white opacity-[0.8] hover:opacity-100"
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={250}
              >
                Мои работы
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
