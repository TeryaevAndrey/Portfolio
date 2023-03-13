import React, { FC } from "react";
import MenuLink from "./MenuLink";

const MenuList: FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
      <MenuLink to="about" title="Обо мне" />
      <MenuLink to="about" title="Проекты" />
      <MenuLink to="about" title="Навыки" />
      <MenuLink to="about" title="Контакты" />
    </div>
  );
};

export default MenuList;
