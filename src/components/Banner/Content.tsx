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
`;

const Text = styled.p`
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  max-width: 662px;
  text-align: center;
  margin-top: 1px;
`;

const Content: FC = () => {
  return (
    <Wrapper>
      <Title>Frontend-разработчик</Title>
      <Text>Верстка, программирование сайтов и веб-приложений</Text>
      <BtnLink title="Далее" href="#about-me" style={{marginTop: "40px"}} />
    </Wrapper>
  );
};

export default Content;
