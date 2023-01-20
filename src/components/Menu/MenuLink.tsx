import React, { FC } from "react";
import {Link} from "react-scroll";

interface IMenuLink {
  title: string;
  href: string;
}

const MenuLink: FC<IMenuLink> = ({ title, href }) => {
  return <Link className="menu-link" to={href} href={href} spy={true} smooth={true} duration={500}>{title}</Link>;
};

export default MenuLink;
