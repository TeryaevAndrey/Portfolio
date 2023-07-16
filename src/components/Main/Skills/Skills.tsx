import Title from "@/components/Title";
import Image from "next/image";
import React, { FC } from "react";
import SkillsList from "./SkillsList/SkillsList";

const Skills: FC = () => {
  return (
    <div className="bg-skills-gradient py-6 more-md:py-20" id="skills">
      <div className="container-app">
        <Title title="Навыки" isCenter={true} />
        <div className="mt-6 md:mt-12">
          <SkillsList />
        </div>
      </div>
    </div>
  );
};

export default Skills;
