import Title from "@/components/Title";
import Link from "next/link";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectsItem from "./ProjectsItem";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects: FC = () => {
  return (
    <div className="bg-projects-gradient py-6 more-md:py-20" id="projects">
      <div className="container-app">
        <div className="flex items-center justify-between">
          <Title title="Проекты" />
          <Link href="/projects">Посмотреть все</Link>
        </div>
        <div className="flex justify-center mx-auto mt-6 md:mt-12 lg:hidden">
          <Swiper
            className="projects-slider sm:max-w-[640px] lg:max-w-full"
            pagination={{clickable: true}}
            spaceBetween={30}
            slidesPerView={1}
            modules={[Pagination]}
            breakpoints={{
              660: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <ProjectsItem
                img="/img/project-img.png"
                title="Lorem"
                text="lorem lorem lorem"
                github="/"
                demo="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectsItem
                img="/img/project-img.png"
                title="Lorem"
                text="lorem lorem lorem"
                github="/"
                demo="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectsItem
                img="/img/project-img.png"
                title="Lorem"
                text="lorem lorem lorem"
                github="/"
                demo="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectsItem
                img="/img/project-img.png"
                title="Lorem"
                text="lorem lorem lorem"
                github="/"
                demo="/"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="hidden lg:grid grid-cols-3 gap-8 mt-6 md:mt-12">
        <ProjectsItem
                img="/img/project-img.png"
                title="Lorem"
                text="lorem lorem lorem"
                github="/"
                demo="/"
              />
              <ProjectsItem
                img="/img/project-img.png"
                title="Lorem"
                text="lorem lorem lorem"
                github="/"
                demo="/"
              />
              <ProjectsItem
                img="/img/project-img.png"
                title="Lorem"
                text="lorem lorem lorem"
                github="/"
                demo="/"
              />
              <ProjectsItem
                img="/img/project-img.png"
                title="Lorem"
                text="lorem lorem lorem"
                github="/"
                demo="/"
              />
        </div>
      </div>
    </div>
  );
};

export default Projects;
