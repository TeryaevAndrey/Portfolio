import React from "react";
import Socials from "@/components/Socials/Socials";
import { collection, getDocs, limit, query } from "firebase/firestore";
import Head from "next/head";
import Link from "next/link";
import { IWork } from "@/types.p";
import { db } from "@/db/firebase";
import ProjectsItem from "@/components/Main/Projects/ProjectsItem";

const Projects = () => {
  const worksCollection = query(collection(db, "works"));
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
    <>
      <Head>
        <title>Teryaev Andrey | Проекты</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-banner-gradient min-h-screen relative pb-6 md:pb-0">
        <div className="py-8">
          <div className="container-app">
            <div className="flex justify-between items-center">
              <Link
                className="text-xl md:text-base text-center relative after:content-[''] after:absolute after:block after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:ease-linear after:duration-150 after:bg-white"
                href="/"
              >
                На главную
              </Link>
              <Socials />
            </div>
          </div>
        </div>
        <div>
          <div className="container-app">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-full pb-8">
              {works.map((work) => {
                const skills = work.skills ? work.skills.join("; ") : "";

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
      </div>
    </>
  );
};

export default Projects;
