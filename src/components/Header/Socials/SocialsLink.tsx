import React, { FC } from 'react';
import styled from 'styled-components';

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
`;

interface ISocialsLink {
  href: string;
  img: any;
}

const SocialsLink: FC<ISocialsLink> = ({href, img}) => {
  return (
    <Wrapper href={href}> 
      {img}
    </Wrapper>
  );
};

export default SocialsLink;