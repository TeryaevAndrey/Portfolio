import React, { FC } from "react";
import styled from "styled-components";
import BtnLink from "../BtnLink";
import Container from "../Container";
import Title from "../Title";

const Wrapper = styled.section`
  padding: 55px 0;

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 58px;
  margin-top: 55px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    margin-top: 30px;
    gap: 30px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;

  &:not(:first-child) {
    margin-top: 30px;
  }
`;

const ContentBlock = styled.div`
  max-width: 528px;
  width: 100%;
`;

const Avatar = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
`;

const BtnWrapper = styled.div`
  margin-top: 30px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const About: FC = () => {
  return (
    <Wrapper id="about-me">
      <Container>
        <Title title="Обо мне" />
        <ContentWrapper>
          <ContentBlock>
            <Text>
              Здравствуйте! Я Frontend разработчик. Живу в Белгороде. На этой
              странице указаны примеры моих работ. Свой путь в Frontend начал в
              2019 году. По началу это было как хобби, сейчас же я понимаю, что
              хочу посвятить программированию всю свою жизнь.
            </Text>
            <Text>
              Список навыков указан{" "}
              <a href="#skills" style={{ borderBottom: "1px solid #fff" }}>
                Здесь
              </a>
              .
            </Text>
            <Text>Страница github:</Text>
            <BtnWrapper>
              <BtnLink title="GitHub" href="https://github.com/TeryaevAndrey" style={{marginTop: "0"}} />
            </BtnWrapper>
          </ContentBlock>
          <Avatar src="/images/avatar.png" alt="avatar" />
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default About;
