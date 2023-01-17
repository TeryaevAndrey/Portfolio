import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #000;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 5px #fff;
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

interface ISocialsLink {
  href: string;
  img: any;
  style?: object;
}

const SocialsLink: FC<ISocialsLink> = ({ href, img, style }) => {
  return (
    <Wrapper href={href} style={style}>
      {img}
    </Wrapper>
  );
};

export default SocialsLink;