import React, { FC } from "react";
import styled from "styled-components";
import MenuLink from "./MenuLink";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 26px;

  @media (max-width: 630px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MenuFooter: FC = () => {
  return (
    <Wrapper>
      <MenuLink title="Главная" href="#banner" />
      <MenuLink title="Обо мне" href="#about-me" />
      <MenuLink title="Портфолио" href="#portfolio" />
      <MenuLink title="Навыки" href="#skills" />
      <MenuLink title="Контакты" href="#contacts" />
    </Wrapper>
  );
};

export default MenuFooter;
