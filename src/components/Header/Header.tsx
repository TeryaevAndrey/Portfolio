import React, { FC } from 'react';
import styled from "styled-components";
import Menu from '../Menu/Menu';
import Socials from './Socials/Socials';
import {RxHamburgerMenu} from "react-icons/rx";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setOpenMenu } from '../../store/headerSlice';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  position: relative;

  @media(max-width: 768px) {
    padding-top: 25px;
  }
`;

const Burger = styled.div`
  width: 25px;
  display: none;
  z-index: 1000;

  @media(max-width: 768px) {
    display: block;
  }
`;

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const isOpenMenu = useAppSelector(state => state.header.isOpenMenu);

  return (
    <Wrapper>
      <Burger onClick={() => dispatch(setOpenMenu(!isOpenMenu))}>
        <RxHamburgerMenu style={{width: "100%", height: "100%"}} />
      </Burger>
      <Menu />
      <Socials />
    </Wrapper>
  );
};

export default Header;