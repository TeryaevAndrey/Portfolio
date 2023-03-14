import React, { FC } from "react";
import MenuLink from "./MenuLink";

const MenuList: FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
      <MenuLink to="about" title="Обо мне" />
      <MenuLink to="projects" title="Проекты" />
      <MenuLink to="skills" title="Навыки" />
      <MenuLink to="footer" title="Контакты" />
    </div>
  );
};

export default MenuList;
