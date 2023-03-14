import Image from "next/image";
import React, { FC } from "react";

interface ISkillsItem {
  img?: string;
  title: string;
  progress: number;
}

const SkillsItem: FC<ISkillsItem> = ({ img, title, progress }) => {
  return (
    <div className="bg-transparent">
      <div className="flex items-center gap-5 py-2 px-1">
        {img && (
          <Image src={img} alt={title} width="50" height="50" loading="lazy" />
        )}
        <span className="inline-block text-xl">{title}</span>
      </div>
      <div className={`mt-1 w-full h-0.5 bg-white relative`}></div>
    </div>
  );
};

export default SkillsItem;
