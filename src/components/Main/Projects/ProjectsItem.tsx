import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface IProjectsItem {
  img: string;
  title: string;
  text: string;
  github: string;
  demo?: string;
}

const ProjectsItem: FC<IProjectsItem> = ({
  img,
  title,
  text,
  github,
  demo,
}) => {
  return (
    <div className="bg-blue-200 rounded-main shadow-md p-4 md:p-6 h-[360px] max-w-[320px] w-full mx-auto">
      <div className="h-full flex flex-col">
        <Link
          href={img}
          className="relative h-[180px] min-h-[180px] rounded-main overflow-hidden hover:scale-[1.05] ease-linear duration-75"
        >
          <Image className="object-cover" src={img} alt={title} fill={true} />
        </Link>
        <div className="py-2 md:py-3">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-gray-600 text-sm">{text}</p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-gray-700 hover:text-gray-900 transition duration-300"
          >
            Github
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm md:text-base hover:bg-blue-600 transition duration-300"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
