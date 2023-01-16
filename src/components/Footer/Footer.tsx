import React, { FC } from "react";
import styled from "styled-components";
import Container from "../Container";
import MenuFooter from "../Menu/MenuFooter";

const Wrapper = styled.footer`
  padding: 40px 0;

  @media(max-width: 630px) {
    padding: 20px 0;
  }
`;

const Footer: FC = () => {
  return (
    <Wrapper>
      <Container>
          <MenuFooter />
      </Container>
    </Wrapper>
  );
};

export default Footer;
