import Title from "@/components/Title";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectsItem from "./ProjectsItem";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { projects } from "@/data/projects";

const Projects: FC = () => {
  return (
    <div className="bg-projects-gradient py-6 more-md:py-20" id="projects">
      <div className="container-app">
        <div className="flex items-center justify-between">
          <Title title="Часть проектов" />
        </div>
        <div className="flex justify-center mx-auto mt-6 md:mt-12 lg:hidden">
          <Swiper
            className="projects-slider sm:max-w-[640px] lg:max-w-full"
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            modules={[Pagination]}
            breakpoints={{
              660: {
                slidesPerView: 2,
              },
            }}
          >
            {projects.map((project, idx) => {
              return (
                <SwiperSlide key={idx + Math.random()}>
                  <ProjectsItem
                    img={project.img}
                    title={project.title}
                    demoLink={project.demoLink}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="hidden lg:grid grid-cols-3 gap-8 mt-6 md:mt-12">
          {projects.map((project, idx) => {
            return (
              <ProjectsItem
                key={idx + Math.random()}
                img={project.img}
                title={project.title}
                demoLink={project.demoLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
