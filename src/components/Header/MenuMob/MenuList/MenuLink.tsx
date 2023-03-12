import React, { FC } from "react";
import { Link } from "react-scroll";

interface MenuLink {
  to: string;
  title: string;
}

const MenuLink: FC<MenuLink> = ({ to, title }) => {
  return (
    <Link
      className="text-xl uppercase text-center"
      to={to}
      spy={true}
      smooth={true}
      offset={50}
      duration={250}
    >
      {title}
    </Link>
  );
};

export default MenuLink;
