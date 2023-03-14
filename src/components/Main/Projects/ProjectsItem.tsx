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
    <div className="max-w-[320px] lg:max-w-[340px] mx-auto w-full h-[360px] rounded-main overflow-hidden bg-[#A5BDDF]">
      <div className="h-full flex flex-col">
        <div className="relative w-full max-h-[200px] min-h-[200px] rounded-main">
          <Image className="object-cover" src={img} alt="project" fill={true} />
        </div>
        <div className="flex flex-col h-full px-2.5 pb-3.5 pt-2">
          <div className="max-h-[89px] overflow-y-auto">
            <h4 className="text-lg font-medium truncate">{title}</h4>
            <p className="mt-1 leading-[19px] font-light text-clip">{text}</p>
          </div>
          <div className="flex items-center flex-wrap justify-between mt-auto">
            <Link
              className="max-w-[150px] w-full min-h-[40px] rounded-main bg-btn-flipped-gradient flex justify-center items-center"
              href={github}
            >
              GitHub
            </Link>
            {demo && (
              <Link
                className="max-w-[115px] w-full min-h-[40px] rounded-main bg-btn-flipped-gradient flex justify-center items-center"
                href={demo}
              >
                Demo
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
