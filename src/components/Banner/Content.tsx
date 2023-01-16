import React, { FC } from "react";
import styled from "styled-components";
import BtnLink from "../BtnLink";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  line-height: 62px;
  @media(max-width: 630px) {
    font-size: 30px;
    line-height: 41px;
    width: 100%;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  max-width: 662px;
  text-align: center;
  margin-top: 1px;

  @media(max-width: 630px) {
    font-size: 16px;
    line-height: 22px;
    width: 100%;
    max-width: 259px;
  }
`;

const Content: FC = () => {
  return (
    <Wrapper>
      <Title>Frontend-разработка</Title>
      <Text>Верстка, программирование сайтов и веб-приложений</Text>
      <BtnLink title="Далее" href="#about-me" style={{marginTop: "40px"}} />
    </Wrapper>
  );
};

export default Content;
