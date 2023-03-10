import { setStateMenu } from "@/store/menu";
import React, { FC } from "react";
import { Link } from "react-scroll";

interface MenuLink {
  to: string;
  title: string;
}

const MenuLink: FC<MenuLink> = ({ to, title }) => {
  const linkHandler = () => {
    setStateMenu(false);
  };

  return (
    <Link
      className="text-xl md:text-base text-center relative after:content-[''] after:absolute after:block after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:ease-linear after:duration-150 after:bg-white"
      to={to}
      spy={true}
      smooth={true}
      offset={50}
      duration={250}
      onClick={linkHandler}
    >
      {title}
    </Link>
  );
};

export default MenuLink;
