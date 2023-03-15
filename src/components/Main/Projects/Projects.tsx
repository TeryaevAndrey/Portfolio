import Title from "@/components/Title";
import Link from "next/link";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectsItem from "./ProjectsItem";
import { collection, getDocs, limit, query } from "firebase/firestore";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { db } from "@/db/firebase";
import { IWork } from "@/types.p";

const Projects: FC = () => {
  const worksCollection = query(collection(db, "works"), limit(6));
  const [works, setWorks] = React.useState<IWork[]>([]);

  React.useEffect(() => {
    const getWorks = async () => {
      const data = await getDocs(worksCollection);

      const worksList = data.docs.map((work) => {
        return {
          id: work.id,
          banner: work.data().banner,
          title: work.data().title,
          skills: work.data().skills,
          github: work.data().github,
          demo: work.data().demo,
        };
      });

      setWorks(worksList);
    };

    getWorks();
  }, []);

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
            {works.map((work) => {
              const skills = work.skills.join("; ") || "";

              return (
                <SwiperSlide key={work.id}>
                  <ProjectsItem
                    img={work.banner}
                    title={work.title}
                    text={skills}
                    github={work.github}
                    demo={work.demo}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="hidden lg:grid grid-cols-3 gap-8 mt-6 md:mt-12">
          {works.map((work) => {
            const skills = work.skills.join("; ");

            return (
              <ProjectsItem
                key={work.id}
                img={work.banner}
                title={work.title}
                text={skills}
                github={work.github}
                demo={work.demo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
