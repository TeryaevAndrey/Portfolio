import React, { FC } from "react";
import styled from "styled-components";

const Link = styled.a`
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
  position: relative;
  transition: all 0.2s linear;

  &:hover::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -3px;
    height: 2px;
    background-color: #fff;
    animation: linkAnim 0.2s forwards ease-in-out;
  }

  @keyframes linkAnim {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

interface IMenuLink {
  title: string;
  href: string;
}

const MenuLink: FC<IMenuLink> = ({ title, href }) => {
  return <Link href={href}>{title}</Link>;
};

export default MenuLink;
