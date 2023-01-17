import React from "react";
import styled from "styled-components";
import BtnLink from "../BtnLink";
import Container from "../Container";
import Title from "../Title";

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Email = styled.a`
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  margin-top: 30px;

  &:hover {
    text-decoration: underline;
  }
`;

const Contacts = () => {
  return (
    <section id="contacts">
      <Container>
        <Inner>
          <Title title="Связь со мной" />
          <BtnLink
            title="Telegram"
            href="https://t.me/teryaev2004"
            style={{ marginTop: "30px" }}
          />
          <Email href="mailto:teryaev.2004@mail.ru">teryaev.2004@mail.ru</Email>
        </Inner>
      </Container>
    </section>
  );
};

export default Contacts;
