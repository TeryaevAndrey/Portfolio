import React, { FC } from "react";
import styled from "styled-components";
import Container from "../Container";
import Menu from "../Menu/Menu";

const Wrapper = styled.footer`
  padding: 40px 0;
`;

const Footer: FC = () => {
  return (
    <Wrapper>
      <Container>
          <Menu centering={true} />
      </Container>
    </Wrapper>
  );
};

export default Footer;
