import React, { FC } from 'react';
import styled from "styled-components";
import { useAppSelector } from '../../store/hooks';
import MenuLink from './MenuLink';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  justify-content: ${(props: {centering?: boolean}) => props.centering ? "center" : "flex-start"};

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 0;
    left: -100%;
    min-height: 100vh;
    background-color: #0B0A0A;
    padding: 15px;
    min-width: 200px;
    padding-top: 70px;
    z-index: 100;
    transition: all 0.2s ease;
  }

  &.active {
    left: -15px;
  }
`;

interface IMenu {
  centering?: boolean;
}

const Menu: FC<IMenu> = ({centering}) => {
  const isOpenMenu = useAppSelector(state => state.header.isOpenMenu);

  return (
    <Wrapper className={`${isOpenMenu ? "active" : ""}`} centering={centering ? true : false}>
      <MenuLink title="Главная" href="#banner" />
      <MenuLink title="Обо мне" href="#about-me" />
      <MenuLink title="Портфолио" href="#portfolio" />
      <MenuLink title="Навыки" href="#skills" />
      <MenuLink title="Контакты" href="#contacts" />
    </Wrapper>
  );
};

export default Menu;