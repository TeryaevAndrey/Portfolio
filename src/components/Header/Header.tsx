import React, { FC } from 'react';
import styled from "styled-components";
import Menu from '../Menu/Menu';
import Socials from './Socials/Socials';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
`;

const Header: FC = () => {
  return (
    <Wrapper>
      <Menu />
      <Socials />
    </Wrapper>
  );
};

export default Header;