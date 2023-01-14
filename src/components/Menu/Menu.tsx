import React, { FC } from 'react';
import styled from "styled-components";
import MenuLink from './MenuLink';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;

const Menu: FC = () => {
  return (
    <Wrapper>
      <MenuLink title="Главная" href="#main" />
      <MenuLink title="Обо мне" href="#about-me" />
      <MenuLink title="Портфолио" href="#portfolio" />
      <MenuLink title="Навыки" href="#skills" />
      <MenuLink title="Контакты" href="#contacts" />
    </Wrapper>
  );
};

export default Menu;