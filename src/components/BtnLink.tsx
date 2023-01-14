import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  width: 100%;
  min-height: 56px;
  border-radius: 20px;
  border: 2px solid #fff;
  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
  padding: 14px 30px;
  background-color: transparent;
  color: #fff;
  transition: all 0.2s ease;

  &:hover {
    background-color: #fbfbfb;
    color: #175B1C;
  }
`;

interface IBtnLink {
  title: string;
  href: string;
  style?: object;
}

const BtnLink: FC<IBtnLink> = ({title, href, style}) => {
  return (
    <Wrapper href={href} style={style}>
      {title}
    </Wrapper>
  );
};

export default BtnLink;