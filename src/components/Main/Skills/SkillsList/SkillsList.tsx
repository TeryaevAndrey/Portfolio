import React, { FC } from "react";
import { skillsData } from "./skillsData";
import SkillsItem from "./SkillsItem";

const SkillsList: FC = () => {
  return (
    <div className="flex flex-col w-full gap-3 md:grid md:gap-9 md:grid-cols-2 lg:grid-cols-3">
      {skillsData.map((skill, idx) => {
        return (
          <SkillsItem
            key={idx}
            img={skill.img}
            title={skill.title}
            progress={skill.progress}
          />
        );
      })}
    </div>
  );
};

export default SkillsList;
