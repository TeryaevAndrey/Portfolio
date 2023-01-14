import React, { FC } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Matrix from "./Matrix";

const Wrapper = styled.div`
  position: relative;
`;

const MatrixWrapper = styled.div`
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;


const Banner: FC = () => {
  return (
    <Wrapper>
      <Header />
      <MatrixWrapper>
        <Matrix />
      </MatrixWrapper>
    </Wrapper>
  );
};

export default Banner;
